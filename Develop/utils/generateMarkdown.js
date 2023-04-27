// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  - [Test Installation](#Test Installation)
  - [Test Run](#Test Run)
  - [Usage](#Usage)
  - [Contribution](#Contribution)

  ---

  ## Description:
  ${data.description}

  ---

  ## Licenses:
  ${data.licenses}

  ---

  ## Installation:
  ${data.installation}

  ---

  ## Test Installation:
  ${data.testInstal}

  ---

  ## Test Run:
  ${data.testRun}

  ---

  ## Usage:
  ${data.usingRepo}

  ---

  ## Contribution:
  ${data.contribution}




`;
}

module.exports = generateMarkdown;
