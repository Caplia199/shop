#  Shop and Tests

## 🔍 Overview

Hello! In this repository, you'll find my portfolio. It contains a small online store written in JavaScript, as well as tests for it using Playwright. You can find the structure of each part of the application inside each repository. To run this project, you can use [Docker](#docker).

Good luck!


## ⚙️ Installation

1. Clone this repository to your local machine.
```bash
git clone git@github.com:Caplia199/shop.git
```
2. Navigate to the project's root directory using the terminal or command prompt.
3. Install the project dependencies by running the following command:

```bash
npm install
```
4. Install browsers by running the following command:
```bash
npx playwright install
```

## ⚡️ Running the Tests

To execute the test cases against the Sauce Labs website, simply run the following command:

check tests on correct web-site :
```bash
npm run test:success
```

check tests on broken web-site :
```bash
npm run test:fail
```

## 📊 Generate Report

To generate Allure report run:

```bash
npm run allure-report
```



<a id="docker"></a>
## 🐳 Docker  

1. Clone this repository to your local machine.
```bash
git clone git@github.com:egorsoroka8/saucelabs.git
```
2. Create image.
```bash
make build
```
3. Run tests.
```bash
make run
```
4. Generate report.
```bash
make report
```

In case you want to see logs, use :
```bash
make logs
```

By default report will be hosted on port 3030, but you can change it in Makefile (run command) and package.json (allure:report, allure:open) files.


## Contributing

Feel free to contribute to this portfolio by opening pull requests or reporting issues. Your contributions and feedback are highly appreciated!

