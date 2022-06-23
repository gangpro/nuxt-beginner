# [NuxtJS] README
> SKILL : `Vue.js`, `NuxtJS Framework`
> <br>
> Nuxt JS Docs : [Nuxt JS Docs](https://nuxtjs.org/docs)
> </br>
> YouTube Class: [Tyler Potts](https://youtu.be/CBwq_TUL5Fg)

## NuxtJS 프로젝트 생성

```bash
➜ npx create-nuxt-app nuxt-beginner
Need to install the following packages:
  create-nuxt-app
Ok to proceed? (y) y
⸨#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⸩ ⠼ idealTree:extglob: timing idealTree:node_modules/extglob Completed in 47ms
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

create-nuxt-app v4.0.0
✨  Generating Nuxt.js project in nuxt-beginner
? Project name: nuxt-beginner
? Programming language: JavaScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? What is your GitHub username? gangpro
? Version control system: Git
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so thi
s library is deprecated. See the compatibility table on MDN: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_
compatibility
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#depre
cated
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use
 the URLSearchParams API instead.
npm WARN deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as loda
sh.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure 
binaries. Upgrade to fsevents 2.
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade
 to chokidar 3 with 15x fewer dependencies

🎉  Successfully created project nuxt-beginner

  To get started:

	cd nuxt-beginner
	npm run dev

  To build & start for production:

	cd nuxt-beginner
	npm run build
	npm run start

npm notice 
npm notice New minor version of npm available! 8.3.1 -> 8.13.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.13.0
npm notice Run npm install -g npm@8.13.0 to update!
npm notice 
➜  

```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
