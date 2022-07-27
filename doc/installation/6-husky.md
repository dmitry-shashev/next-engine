#### Base init

```bash
pnpx husky install
```

#### Add the package

```bash
pnpm add -D husky
```

#### Add the command into the `package.json`

```bash
  "scripts": {
    "prepare": "husky install",
    "prettier-format": "prettier --write . && git add --all",
```

#### Add all necessary scripts

```bash
pnpx husky add .husky/pre-commit "pnpm prettier-format"
pnpx husky add .husky/pre-commit "pnpm lint"
pnpx husky add .husky/pre-commit "pnpm tsc"
```
