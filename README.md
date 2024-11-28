# Unit Testing Configuration using Chai/Mocha:
[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Mocha](https://img.shields.io/badge/tested%20with-Mocha-8D6748.svg)](https://mochajs.org/)
[![Chai](https://img.shields.io/badge/tested%20with-Chai-A30701.svg)](https://www.chaijs.com/)

### This is a test project for **Back-End Test Technologies** January 2024 Course @ SoftUni.
---
## Overview

This repository demonstrates how to configure and execute unit tests using Mocha and Chai in a Node.js environment. The project includes step-by-step instructions for initializing a Node.js project, installing dependencies, and setting up Mocha and Chai for testing.

## Getting Started

### Requirements

Before you begin, ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Initialize the Project**
- Start by creating a `package.json` file:

    ```sh
    npm init
    ```

- Follow the prompts to complete the setup.

2. **Install Mocha and Chai**
- Install Mocha as the test runner and Chai for assertions:
  
    ```sh
    npm install
    npm install chai
    npm install mocha
    ```

### Running the Tests

- To run your tests using Mocha, use the following command:

```sh
npm run test
```
- This will execute all tests within the project.
  
### Module Format
For the purposes of this project, it doesn't matter which standard you'd prefer to use – ESM or CommonJS. This time I used CommonJS.

If you chose the CommonJS standard, you don't have to change the file extension of the test files and you don't need to add `"type": "module"` in the `package.json` file.

### CommonJS
CommonJS is a module system that is widely used in Node.js. In this project, I have used the CommonJS module format. This means you can require modules using `require()` and export modules using `module.exports`. Here is an example:
```sh
// Requiring a module
const myModule = require('./myModule');

// Exporting a module
module.exports = myFunction;
```
### ECMAScript Modules (ESM)
ECMAScript Modules (ESM) is the official standard for JavaScript modules. If you prefer to use ESM, you can do so by changing the file extensions to `.mjs` or by adding `"type": "module"` in the `package.json` file. Here is an example:
```sh
// Importing a module
import myModule from './myModule';

// Exporting a module
export default myFunction;
```
### License
This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

### Contact
For any questions or suggestions, please reach out to the course instructor or open an issue in the repository.

---
### Happy Testing! 🚀
