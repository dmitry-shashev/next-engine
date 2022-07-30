#### NextJS

```bash
pnpm add react react-dom next
mkdir pages
mkdir components
mkdir components/primitive
mkdir components/composite
mkdir components/smart
```

In `package.json`

```bash
    "tsc": "tsc",
    "build": "next build",
    "start": "next start -p 3201",
    "dev": "next dev -p 3201",
```

#### Typescript

```bash
pnpm add -D typescript @types/react @types/react-dom @types/node

# nextjs will fill it automatically
touch tsconfig.json
```

Add in `tsconfig.json`

```
"moduleResolution": "Node"

"baseUrl": "./",
```

#### Scss

```bash
pnpm add -D sass
```

#### Class names

```bash
pnpm add clsx
```

#### Reset styles

```bash
pnpm add reset-css
```

In `_app.tsx` add

```bash
import 'reset-css'
```

#### Plop - code generation

```bash
pnpm add -D plop
```

In `package.json`

```bash
    "plop": "plop",
```

#### For encoding and decoding

```bash
pnpm add js-base64
```

#### For easy manipulating with enums

```bash
pnpm add ts-enum-util
```

#### Helpers for cookies

```bash
pnpm add cookies-next
```

#### Debouncing

```bash
pnpm add use-debounce
```

#### Install the main library

```bash
pnpm add react-hook-form
```

#### Add lodash

```bash
pnpm add lodash @types/lodash
```