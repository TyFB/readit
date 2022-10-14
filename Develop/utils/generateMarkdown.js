// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    license = '';
  } else {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    license = '';
  } else {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    license = '';
  } else {

  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  console.log(data);
  return `# ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [Credits](#credits)
      - [License](#license)
      - [Questions](#questions)
      - [Tests](#tests)

    ## Installation
    ${data.instructions}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.contribution}

    ## License
    ${data.license}${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}${renderLicenseSection(license)}

    ## Questions
    ${data.github}
    https://github.com/${data.github}/${data.title}
    If you have any questions, you can reach me at ${data.email}.

    ## Tests
    ${data.test}
  `;
};

module.exports = generateMarkdown;
