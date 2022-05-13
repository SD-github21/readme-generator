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
  return `
  # **${data.title}**

  ## **Description**
  ${data.description}

  ## **Table of Contents**
  [Installation](https://github.com/SD-github21/readme-generator#installation)
  [Usage](https://github.com/SD-github21/readme-generator#usage)
  [License](https://github.com/SD-github21/readme-generator#license)
  [Contributing](https://github.com/SD-github21/readme-generator#contributing)
  [Tests](https://github.com/SD-github21/readme-generator#tests)
  [Questions](https://github.com/SD-github21/readme-generator#questions)

  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **License**
  ${data.license}

  ## **Contributing**
  ${data.contributing}

  ## **Tests**
  ${data.tests}

  ## **Questions**
  ${data.questions}

`;
}

module.exports = generateMarkdown;