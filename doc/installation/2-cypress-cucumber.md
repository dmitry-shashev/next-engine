#### Cypress

Install

```bash
pnpm add -D cypress
```

In `package.json`

```bash
    "cypress": "cypress open",
    "cypress:headless": "cypress run --headless --browser chrome",
    "e2e": "start-server-and-test release http://localhost:3201 cypress",
    "e2e:headless": "start-server-and-test release http://localhost:3201 cypress:headless"
```

Install a helping tool for running tests

```bash
pnpm add -D start-server-and-test
pnpm add -D @badeball/cypress-cucumber-preprocessor
pnpm add -D @cypress/browserify-preprocessor
```

On the first start it will create a foundation of tests - `cypress` folder

```bash
npm run cypress
```

Create a folder with files

```bash
./cypress/integration
```

New cypress version defines global `expect` and in IDE it leads to conflicts with `jest`.
The solution - ignore cypress in `tsconfig.json`

```bash
  "exclude": [
    "cypress",
    "cypress.config.ts",
  ]
```
