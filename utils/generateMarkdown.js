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
  ${data.badge}

  # **${data.title}**

  ## **Description**
  ${data.description}

  ## **Table of Contents**
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)

  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **License**
  This project is covered under the following license: ${data.license}

  ## **Contributing**
  ${data.contributing}

  ## **Tests**
  ${data.tests}

  ## **Questions**
  ${data.github}
  [GitHub]{${data.link})

`;
}

module.exports = generateMarkdown;
