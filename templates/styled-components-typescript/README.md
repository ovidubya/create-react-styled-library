# {{name}}

> {{description}}

[![NPM](https://img.shields.io/npm/v/{{name}}.svg)](https://www.npmjs.com/package/{{name}}) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install Peer Dependencies

```bash
npm install --save react styled-components
```

## Install

```bash
npm install --save {{name}}
```

## Usage

```tsx
import React from 'react'

import { ThemeProvider, Button } from '{{name}}'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider>
      <Button backgroundColor='primary' color='white'>
        Hello, I am a styled button
      </Button>
    </ThemeProvider>
  )
}
```

## Live Demo

For examples of the {{name}} in action, checkout the storybook <a href="https://{{author}}.github.io/{{name}}" target="_blank">here</a>.

## Develop

This will open a storybook dev server on `http://localhost:8080`

```bash
$ npm start # this will open storybook
```

## Build

This will output the cjs and es modules to the `dist` folder

```bash
$ npm run build
```

## Deploy github page

This will publish storybook as a Github page

```bash
$ npm run deploy-github-page
```

## Publish to npm

(you need to be logged in via npm for publishing)

```bash
$ npm publish
```

## Publish locally

To create a local TAR file to test before publishing, run

```
$ npm pack
```

This will create a file called `{{name}}-1.0.0.tgz`

You can use this file as a normal package dependency
by linking in your `npm install`

```sh
$ npm i path/to/{{name}}-1.0.0.tgz
```

## License

{{license}} © [{{author}}](https://github.com/{{author}})
