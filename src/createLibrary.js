const path = require("path");
const mkdirp = require("make-dir");
const pEachSeries = require("p-each-series");
const globby = require("globby");
const ora = require("ora");
const handlebars = require("handlebars");
const fs = require("fs");
const execa = require("execa");

const templateBlacklist = new Set([".git"]);

module.exports = async (info) => {
  const { manager, template, name, git } = info;

  // handle scoped package names
  const parts = name.split("/");
  info.shortName = parts[parts.length - 1];

  const dest = path.join(process.cwd(), info.shortName);
  info.dest = dest;
  await mkdirp(dest);

  const source = path.join(__dirname, "..", "templates", template);
  const files = await globby(source.replace(/\\/g, "/"), {
    dot: true,
  });
  {
    const promise = pEachSeries(files, async (file) => {
      return module.exports.copyTemplateFile({
        file,
        source,
        dest,
        info,
      });
    });
    ora.promise(promise, `Copying ${template} template to ${dest}`);
    console.log();
    await promise;
  }

  {
    console.log();
    console.log("Initializing npm dependencies. This will take a minute.");
    console.log();

    const rootP = module.exports.initPackageManagerRoot({ dest, info });
    ora.promise(rootP, `Running ${manager} install in root directory`);
    await rootP;
  }

  if (git) {
    const promise = module.exports.initGitRepo({ dest });
    ora.promise(promise, "Initializing git repo");
    await promise;
  }
};

module.exports.copyTemplateFile = async (opts) => {
  const { file, source, dest, info } = opts;

  const fileRelativePath = path.relative(source, file).replace(/\\/g, "/");
  if (fileRelativePath.startsWith(".git")) {
    return;
  }

  const destFilePath = path.join(dest, fileRelativePath);
  const destFileDir = path.parse(destFilePath).dir;

  await mkdirp(destFileDir);

  if (templateBlacklist.has(fileRelativePath)) {
    const content = fs.readFileSync(file);
    fs.writeFileSync(destFilePath, content);
  } else {
    const template = handlebars.compile(fs.readFileSync(file, "utf8"));
    const content = template({
      ...info,
      yarn: info.manager === "yarn",
    });

    fs.writeFileSync(destFilePath, content, "utf8");
  }

  return fileRelativePath;
};

module.exports.initPackageManagerRoot = async (opts) => {
  const { dest, info } = opts;

  const commands = [
    {
      cmd: info.manager,
      args: ["install"],
      cwd: dest,
    },
  ];

  return pEachSeries(commands, async ({ cmd, args, cwd }) => {
    return execa(cmd, args, { cwd });
  });
};

module.exports.initGitRepo = async (opts) => {
  const { dest } = opts;

  const gitIgnorePath = path.join(dest, ".gitignore");
  fs.writeFileSync(
    gitIgnorePath,
    `
# See https://help.github.com/ignore-files/ for more about ignoring files.
# dependencies
node_modules
# builds
build
dist
.rpt2_cache
# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,
    "utf8"
  );

  const commands = [
    {
      cmd: "git",
      args: ["init"],
      cwd: dest,
    },
    {
      cmd: "git",
      args: ["add", "."],
      cwd: dest,
    },
    {
      cmd: "git",
      args: [
        "commit",
        "-m",
        `init ${require("../package.json").name}@${
          require("../package.json").version
        }`,
      ],
      cwd: dest,
    },
  ];

  return pEachSeries(commands, async ({ cmd, args, cwd }) => {
    return execa(cmd, args, { cwd });
  });
};
