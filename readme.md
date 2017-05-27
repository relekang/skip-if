# skipIf(condition, name, test)

A small helper to make dynamic decisions on whether to skip tests. This might be useful
in situations where a test is only applicable for certain environments.

## Installation

```shell
npm install --save-dev skip-if # or yarn add --dev skip-if
```

## Usage

```js
const skipIf = require('skip-if');

skipIf(process.platform === 'darwin', 'test only for macOs', () => {})
```
