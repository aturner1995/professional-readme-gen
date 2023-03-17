// Function that returns the license section of README
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License

This project is licensed under the ${license} license.`;
    }
    else {
        return '';
    }
}

module.exports = renderLicenseSection;