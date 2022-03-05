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

The build process uses [esbuild](https://esbuild.github.io/) to compile, bundle and minify TypeScript source code starting from `src/index.ts` as the entry point. The output is put in the `dist` directory.

### Release Process

Releases are maintained within Github. You can use their UI to create a new release. While doing so make sure you do all the following:

- Mark it with a new tag version
- Manually add the compiled script as a binary [see step 8 in these docs](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)
- Update the `README.md` link to the newly released script
