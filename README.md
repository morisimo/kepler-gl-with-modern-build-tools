# Kepler.gl Vite and RSBuild examples

This repository contains examples of how to use [Kepler.gl](https://github.com/keplergl/kepler.gl) with [Vite](https://vitejs.dev/) and [RSBuild](https://rsbuild.dev/).

Both RSBuild and Vite examples also include TypeScript and the latest version of Redux Toolkit.

## Rationale

Frontend developer tooling has evolved rapidly in recent years. Typescript is the new norm, and build tools like Vite and RSBuild provide a more streamlined and efficient workflow compared to Webpack.

Redux has also significantly evolved, with the introduction of [Redux Toolkit](https://redux-toolkit.js.org/) and [RTK Query](https://redux-toolkit.js.org/rtk-query/overview). The lates version (2.x.x) is Typescript-first and provides a more streamlined and efficient workflow compared older versions of Redux.

This repo is intended to serve as both a starter kit for integrating Kepler.gl into modern frontend applications as well as serve as a testbed for testing the latest versions of Kepler.gl, Redux, and Typescript.

## Packages

- [Kepler.gl](https://github.com/keplergl/kepler.gl) v3.0.0
- [Redux Toolkit](https://redux-toolkit.js.org/) v2.2.7
- [Redux](https://redux.js.org/) v5.0.1
- [React-Redux](https://react-redux.js.org/) v9.1.2
- [React-Palm](https://github.com/btford/react-palm) v3.3.8 (This is an unmaintained dependency of Kepler.gl and I suspect needs to be replaced with Redux Thunk)
- [React](https://reactjs.org/) v18.3.1
- [Styled Components](https://styled-components.com/) v4.1.3 (pinnedd to 4.1.3 for compatibility with Kepler.gl)

## RSBuild

RSBuild, built on RSPack, is intened to be a drop-in replacement for [Webpack](https://webpack.js.org/). The main upsides are drastically reduced configuration and a much faster build time.

### Getting started

```bash
cd rsbuild
npm i --legacy-peer-deps
npm start
```

## Vite

Vite ("Next Generation Frontend Tooling") is widely adopted and proiveds an alternative to Webpack.

### Getting started

```bash
cd vite
npm i --legacy-peer-deps
npm start
```

## Turbopack

Turbopack is a Vercel rebuild of Webpack. It is currently in beta and accessible via the `--turbo` flag.

```bash
cd turbopack
npm i --legacy-peer-deps
npm run start:turbo
```

## Issues

**react-palm lack of type definitions:**

```sh
Type Error in ./src/stores/store.ts:3:32
TS7016: Could not find a declaration file for module 'react-palm/tasks'. '.../repo/rsbuild/node_modules/react-palm/tasks/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/react-palm` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-palm/tasks';`
    1 | import keplerGlReducer, { enhanceReduxMiddleware } from "@kepler.gl/reducers";
    2 | import { configureStore, Tuple } from "@reduxjs/toolkit";
  > 3 | import { taskMiddleware } from "react-palm/tasks";
```

**Multiple serialization to store issues with Redux Toolkit:**

```sh
redux-toolkit.modern.mjs:414 A non-serializable value was detected in the state, in the path: `keplerGl.KeplerGl RSBuild.visState.layerClasses.point`. Value: ƒ PointLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PointLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPosition…
Take a look at the reducer(s) handling this action type: @@kepler.gl/UPDATE_MAP.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
```

```sh
redux-toolkit.modern.mjs:414 A non-serializable value was detected in the state, in the path: `keplerGl.KeplerGl RSBuild.visState.layerClasses.point`. Value: ƒ PointLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PointLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPosition…
Take a look at the reducer(s) handling this action type: @@kepler.gl/LOAD_MAP_STYLES.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
```

```sh
redux-toolkit.modern.mjs:414 A non-serializable value was detected in the state, in the path: `keplerGl.KeplerGl RSBuild.visState.layerClasses.point`. Value: ƒ PointLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PointLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPosition…
Take a look at the reducer(s) handling this action type: @@kepler.gl/REGISTER_ENTRY.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
```
