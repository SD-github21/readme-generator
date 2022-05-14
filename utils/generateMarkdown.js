

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == "Apache License 2.0") {
    let badge = 'https://img.shields.io/badge/License-Apache_2.0-success';
    return badge;       

  } else if (license == "GNU GPLv2") {
    let badge = 'https://img.shields.io/badge/License-GPL_v2-red'; 
    return badge;

  } else if (license == "GNU GPLv3") {
    let badge = 'https://img.shields.io/badge/License-GPL_v3-important';
    return badge;

  } else if (license == "MIT") {
    let badge = 'https://img.shields.io/badge/License-MIT-informational';
    return badge;

  } else if (license === "ISC") {
    let badge = 'https://img.shields.io/badge/License-ISC-ff69b4';
    return badge;
  }
  else {
    let badge = "";
    return badge;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == "Apache License 2.0") {
    let link = "https://opensource.org/licenses/Apache-2.0";
    return link;       

  } else if (license == "GNU GPLv2") {
    let link = "https://opensource.org/licenses/GPL-2.0"; 
    return link;

  } else if (license == "GNU GPLv3") {
    let link = "https://opensource.org/licenses/GPL-3.0";
    return link;

  } else if (license == "MIT") {
    let link = "https://opensource.org/licenses/MIT";
    return link;

  } else if (license == "ISC") {
    let link = "https://opensource.org/licenses/ISC";
    return link;
  }
  else {
    let link = "";
    return link;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  This project is covered under the following license: ${license}
  ${ renderLicenseLink }
 
  `;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, github  } = data;
  
  return `
  ![License](${renderLicenseBadge(license)})

  # **${title}**

  ## **Description**
  ${description}

  ## **Table of Contents**
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)

  ## **Installation**
  ${installation}

  ## **Usage**
  ${usage}

  ## **License**
  ${ renderLicenseSection(license) }

  ## **Contributing**
  ${contributing}

  ## **Tests**
  ${tests}

  ## **Questions**
  <a href={${github}} target="_blank">GitHub Link</a>

`;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };
