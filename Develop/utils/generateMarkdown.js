// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses.length === 0) {
    return "No License";
  }
  let links = [];
  for (let i = 0; i < licenses.length; i++) {
    if (licenses[i] === "MIT License") {
      links.push(
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      );
    } else if (licenses[i] === "Apache License 2.0") {
      links.push(
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      );
    } else if (licenses[i] === "GNU General Public License (GPL)") {
      links.push(
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      );
    } else if (licenses[i] === "BSD License") {
      links.push(
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      );
    } else if (licenses[i] === "Creative Commons License") {
      links.push(
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
      );
    } else if (licenses[i] === "Mozilla Public License") {
      links.push(
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      );
    }
  }
  let allLinks = "\n";
  links.forEach((link) => {
    allLinks += link + "\n";
  });
  return allLinks;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contentes:
  - [Project Description](#Description)
  - [Licenses](#Licenses)
  - [Installation](#Installation)
  - [Test Install](#Test-Installation)
  - [Test Running](#Test-Run)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Questions](#Questions)

  ---

  ## Description:
  ${data.description}

  ---

  ## Licenses:
  ${data.licenses}
  ${renderLicenseLink(data.licenses)}

  ---

  ## Installation:
  ${data.installation}

  ---

  ## Test Installation:
  ${data.testInstall}

  ---

  ## Test Run:
  ${data.testRun}

  ---

  ## Usage:
  ${data.usingRepo}

  ---

  ## Contribution:
  ${data.contribution}

  ---

  ## Questions:
  ${data.username}
  ${data.email}


`;
}

module.exports = generateMarkdown;
