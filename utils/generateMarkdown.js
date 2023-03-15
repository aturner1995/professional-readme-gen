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
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Installation 🧰
${data.install}

## Usage ⚙️
${data.usage}

## Contribution 🙏
${data.contribution}

## Testing ✔️
${data.test}

## Questions ❓
For any questions releated to this repo please [**Email**](mailto:${data.email}) me.
Checkout my [**GitHub**](https://github.com/${data.github}) for more projects.

## Credits 😊
${data.credits}

## License 📝
${data.license}
`;
}

module.exports = generateMarkdown;
