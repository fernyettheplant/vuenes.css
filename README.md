# VueNES.css

[![buddy pipeline](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163725/badge.svg?token=d1e810606d21ee50ab07b91076e24552754952406a381d13de8ae5deedd6de3f "buddy pipeline")](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163725)
[![buddy pipeline](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163726/badge.svg?token=d1e810606d21ee50ab07b91076e24552754952406a381d13de8ae5deedd6de3f "buddy pipeline")](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163726)
[![codecov](https://codecov.io/gh/jefer590/vuenes.css/branch/master/graph/badge.svg)](https://codecov.io/gh/jefer590/vuenes.css)
[![Greenkeeper badge](https://badges.greenkeeper.io/jefer590/vuenes.css.svg)](https://greenkeeper.io/)
![](https://img.shields.io/npm/dt/vuenes.css.svg)
![](https://img.shields.io/david/jefer590/vuenes.css.svg)

## Introduction

VueNES.css is a basic component library based on the CSS Framework [NES.css](https://github.com/BcRikko/NES.css)

## How to install

### Using NPM

```bash
$npm install vuenes.css
```

### Using yarn

```bash
$yarn add vuenes.css
```

## Quick Start
### VueJS Project
In your `main.js` you only need to import the component library and the just use it!

```js
import Vue from 'vue'
import VueNesCss from 'vuenes.css'

Vue.use(VueNesCss)
```

## NuxtJS Project

You can import the whole library in a NuxtJS Plugin

`~/plugins/vuenes.css.js`
```js
import Vue from 'vue'
import VueNesCss from 'vuenes.css'

Vue.use(VueNesCss)
```

and then import it in your `nuxt.config.js` file
```js
plugins: [
  '~/plugins/vuenes.css.js'
]
```

### Individual Components
You can also import individual components instead of the whole library in your VueJS and NuxtJS Components
```vue
<template>
  <div class="container">
    <NesInputText id="example" />
    <NesOctocat animate />
  </div>
</template>

import { NesInputText, NesOctocat } from 'vuenes.css'

export default {
  components: {
    NesInputText,
    NesOctocat
  }
}
```

## Documentation
Go to the `docs/` library to navigate through the components documentation

## Storybook
For visual testing, the library contains storybook which you can run by doing the next command:
```sh
$yarn storybook:serve
```

## Help Wanted
Some components are missing in this library such as the table one.. if you come up with a solution for a missing component, feel free to Open a PR and discuss the approach

If you find any issue, please create an Issue or upload a PR
