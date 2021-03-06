const { program } = require("commander");
const promptLibraryParams = require("./promptLibraryParams");
const createLibrary = require("./createLibrary");

async function main() {
  program
    .version(require("../package.json").version)
    .option(
      "-u, --update-dependencies",
      "Auto update npm packages to their latest version (not recommonded)"
    )
    .option("-ui, --open-with-browser", "Open a browser instead of CLI");

  program.parse(process.argv);

  if (program.openWithBrowser) {
    let results = await promptLibraryParams();
    createLibrary(info);
  } else {
    let info = await promptLibraryParams();
    createLibrary(info);
  }
}
main();
