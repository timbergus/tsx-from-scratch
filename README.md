# TSX From Scratch

This is the [tutorial](https://medium.com/@kevinegstorf/react-with-typescript-from-scratch-3c6493900244) I have followed. These videos are pretty useful too.

* [React Typescript Tutorial](https://www.youtube.com/watch?v=Z5iWr6Srsj8&t=827s)
* [Typescript Generics Tutorial](https://www.youtube.com/watch?v=nViEqpgwxHE)

## Introduction

### Install Libraries

These are to enable TypeScript support inside the project. TS-Node loads TypeScript files as normal JavaScript files.

* typescript
* ts-node

These are the libraries for React. We need the React ecosystem and its types. All the types are imported from __@types__ and are like the headers files in __C__, where we have the components definitions.

* react
* @types/react
* react-dom
* @types/react-dom

These are the WebPack libraries with their corresponding types. The TS-Loader helps WebPack to load the TypeScript files. In this case we check two extensions: __ts__ and __tsx__.

* webpack
* webpack-cli
* @types/webpack
* ts-loader
* webpack-dev-server
* @types/webpack-dev-server

### Create the `webpack.config.ts` File

In this file we are going to set the WebPack configuration, and as you can see, is a __ts__ file instead of a __js__ file. This file will be loaded using __ts-node__.

What we need here is:

* An entry point: `./src/index.tsx`.
* An output directory for the bundle: `./dist/`.
* The development server configuration (port, open, hot, etc).
* The extensions we are going to resolve: `.js`, `.ts`, `.tsx`, `.json`.
* The rules to load files: `/\.tsx?$/`.
* The plugins we are going to use.

In this case, the only plugin will be the __HtmlWebPackPlugin__. This plugin will create the __index.html__ file with our bundle file inserted in the code.

### Create the `tsconfig.json` File

In this file we are going to configure the properties for the TypeScript compiler. The ones we are going to use are:

* __outDir:__ Here we set the output directory for the compiler. This will be the same as the WebPack output directory.
* __noImplicitAny:__ Raises error on expressions and declarations with an implied any type.
* __target:__ The JavaScript version we a re going to transpile the typeScript code. In this case, we are setting __ES5__ because is the version accepted for most of the browsers nowadays.
* __jsx:__ Allows us to use JSX.
* __esModuleInterop:__ Allows TypeScript to use the import system used by ECMAScript, and let us stop using the `import * as T from 't';` used for the namespaces.

Check [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for more info.

### Add the Scripts to the `package.json`

For the moment we are going to have the __start__ script to launch the WebPack development server, and the __build__ script to build the distribution folder.

## Creating the React Code

If you came from __React + Flow__ this is more or less the same, except for some new things like interfaces. The idea here is to lear pretty well the new JavaScript standard, and the type system from TypeScript.

The rest is just React.
