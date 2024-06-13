# Unit Testing Configuration using Chai/Mocha:
## This is a test project for Back-End Test Technologies January 2024 Course @ SoftUni.
---
## Overview

This project is designed to demonstrate how to set up and run tests using Mocha and Chai in a CommonJS environment. It includes the necessary steps to initialize a Node.js project, install dependencies, and run tests.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Initialize your project**

    ```sh
    npm init
    ```

    Follow the prompts to set up your `package.json`.

2. **Install Dependencies**

    ```sh
    npm install
    npm install chai
    npm install mocha
    ```

### Running Tests

To run your tests with Mocha, use the following command:

```sh
npm run test
```

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
### Contributing
Contributions are welcome! If you have any improvements or bug fixes, feel free to open a pull request.

### License
This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

### Contact
For any questions or suggestions, please reach out to the course instructor or open an issue in the repository.

