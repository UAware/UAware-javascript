# Contributing

Thank your for wanting to help out. This document should provide everything you need to get started. If anything is unclear please reach out to the maintainers and we'll endevour to help you and improve the documentation for future contributors.

## Translation guide

Messages are stored in `src/messages.json`. You can review current messages there and suggest corrections or additions.

If you are confident raising a PR, please do so. If you don't know what that means, don't worry! Get in touch with the maintainers and we can handle this for you.

## Developer guide

### Prerequisites

- [Node](https://nodejs.org/en/)
- [npm CLI](https://docs.npmjs.com/cli/v8/configuring-npm/install)

### Getting Started

Install project dependencies:

```shell
npm install
```

Run local build:

```shell
npm run build
```

### Build Process

The build process uses [esbuild](https://esbuild.github.io/) to compile, bundle and minify TypeScript source code starting from `src/index.ts` as the entry point. The output is put in the `dist` directory. Additionally the `project.json` and `README.md` files are copied to `dist`. This gives the `dist` directory everything it needs to be published directly to `npm`.

### Publishing

You'll need permission to publish to the UAware npm account. If you think you should have access, get in touch with the maintainers.

```shell
npm run build
npm login
npm publish ./dist
```
