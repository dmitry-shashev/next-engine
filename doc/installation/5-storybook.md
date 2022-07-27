#### Install

> Storybook doesn't support React 18, and the current installation
> goes with a lot of warning and unmet peers - so far it was reverted

```bash
pnpx sb init -s
pnpm i
pnpm add -D @storybook/cli
```

#### Add loader for scss

```bash
pnpm add -D @storybook/preset-scss
```

Add in `.storybook/main.js` in `addons`

```bash
'@storybook/preset-scss',
```

#### Add paths resolver for typescript

```bash
pnpm add -D tsconfig-paths-webpack-plugin
```

Add in `.storybook/main.js`

```bash
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
// ...
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
}
```
