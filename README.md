hash-heroes
==========
[![NPM version][npm-image]][npm-url] [![dependencies Status][david-dep-image]][david-dep-url] [![devDependencies Status][david-devDep-image]][david-devDep-url]

# usage

```js
import HashHero from 'hash-heroes'

export default class App extends React.Component {

  …

  render() {
    return (
      <HashHero seed={address} scalingFactor={4} />
    )
  }
}
```

# setup

```sh
$ git clone https://github.com/khakiprojects/hash-heroes
$ cd hashheroes
$ npm i
```

## local development

webpack-dev-server is used for local development. the following command will start a dev server, and
serve the files from the `example` folder.

```sh
$ npm run dev # or $ yarn dev
```

## demo page

the demo page is on the `gh-pages` branch in the `demo` folder.

```sh
# first install dependencies in the top level package
$ npm i # or yarn

# then checkout the gh-pages branch and install dependencies in the "demo" folder
$ git checkout gh-pages
$ cd demo && npm i # or yarn
$ npm run start # or yarn start
```

[david-dep-image]: https://david-dm.org/khakiprojects/hash-heroes/status.svg
[david-dep-url]: https://david-dm.org/khakiprojects/hash-heroes
[david-devDep-image]: https://david-dm.org/khakiprojects/hash-heroes/dev-status.svg
[david-devDep-url]: https://david-dm.org/khakiprojects/hash-heroes?type=dev
[npm-image]: https://badge.fury.io/js/hash-heroes.svg
[npm-url]: https://npmjs.org/package/hash-heroes
