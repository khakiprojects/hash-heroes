hash-heroes
==========

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
