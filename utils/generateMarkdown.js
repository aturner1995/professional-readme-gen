// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.licenseBadge}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [License](#license)

## Installation 🧰
${data.install}

## Usage ⚙️
${data.usage}

## Contribution 🙏
${data.contribution}

## Testing ✔️
${data.test}

## Questions ❓
* For any questions releated to this repo please [**Email**](mailto:${data.email}) me.
* Checkout my [**GitHub**](https://github.com/${data.github}) for more projects.

${data.licenseSection}
`;
}

module.exports = generateMarkdown;
