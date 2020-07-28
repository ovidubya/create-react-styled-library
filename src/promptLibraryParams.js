"use strict";

const inquirer = require("inquirer");
const validateNpmName = require("validate-npm-package-name");
const getGitConfigPath = require("git-config-path");
const githubUsername = require("github-username");
const parseGitConfig = require("parse-git-config");

module.exports = async () => {
  const gitConfigPath = getGitConfigPath("global");
  let author = "";

  try {
    if (gitConfigPath) {
      const gitConfig = parseGitConfig.sync({ path: gitConfigPath });

      if (gitConfig.github && gitConfig.github.user) {
        author = gitConfig.github.user;
      } else if (gitConfig.user && gitConfig.user.email) {
        author = await githubUsername(gitConfig.user.email);
      }
    }
  } catch (e) {
    author = "example-username";
  }

  const opts = {
    author: author,
    description: `Made with ${require("../package.json").name}`,
    license: "MIT",
    manager: "npm",
  };

  const templateChoices = {
    default: "styled-components",
    "default w/ styled-system": "styled-components",
    typescript: "styled-components",
    "typescript w/ styled-system": "styled-components",
  };

  const info = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Package Name",
      validate: (name) => {
        return name && validateNpmName(name).validForNewPackages;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Package Description",
      default: opts.description,
    },
    {
      type: "input",
      name: "author",
      message: "Author's GitHub Handle",
      default: opts.author,
    },
    {
      type: "input",
      name: "repo",
      message: "GitHub Repo Path",
      default: (info) => `${info.author}/${info.name}`,
    },
    {
      type: "input",
      name: "license",
      message: "License",
      default: opts.license,
    },
    {
      type: "list",
      name: "manager",
      message: "Package Manager",
      choices: ["npm", "yarn"],
      default: opts.manager,
    },
    {
      type: "confirm",
      name: "git",
      message: "Initialize Git Repo",
      default: true,
    },
    {
      type: "list",
      name: "template",
      message: "Template",
      choices: ["styled-components", "styled-components-typescript"],
    },
  ]);

  return info;
};
