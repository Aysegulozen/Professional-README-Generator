// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### ${data.projectName}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ## GitHub Username
  ${data.github}

  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
