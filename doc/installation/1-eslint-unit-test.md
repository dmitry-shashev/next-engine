#### ES Lint

add into `package.json`

```bash
"lint": "eslint .",
```

> Do not use `next lint` - it doesn't use the config file

on the first run it will install and configure it

> it will also create `.eslintrc.json`

```bash
npm run lint
npm ci
```

#### Install packages

```bash
pnpm add -D eslint
pnpm add -D eslint-config-prettier eslint-plugin-prettier prettier
pnpm add -D eslint-plugin-import eslint-plugin-react
pnpm add -D @typescript-eslint/parser@5.4.0 @typescript-eslint/eslint-plugin
pnpm add -D eslint-plugin-jsx-a11y
pnpm add -D eslint-plugin-jest
pnpm add -D eslint-plugin-css-modules
pnpm add -D eslint-config-airbnb eslint-config-airbnb-typescript
```

Add the prettier config - `.prettierrc.json`

Add all configs into `.eslintrc.json`

Configure IDE run prettier and lint on save

#### Jest

```bash
pnpm add -D jest ts-jest @types/jest jest jest-environment-jsdom
pnpm add -D --save-exact jsdom jsdom-global
pnpm add -D tsconfig-paths-jest
pnpm add -D @swc/core @swc/jest  @swc/cli
pnpm add -D @types/testing-library__jest-dom
```

#### React testing library

```bash
pnpm add -D @testing-library/react
pnpm add -D jest-environment-jsdom
pnpm add -D @testing-library/jest-dom
pnpm add -D @testing-library/user-event
```

In `package.json`

```bash
  "scripts": {
    "test": "jest"
  },
```

Create files

```bash
jest.config.js
./tests/**
```

Add in `tsconfig.json` into 'paths'

```bash
"@tests/*": ["tests/*"]
```
