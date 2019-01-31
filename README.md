# VueNES.css

[![buddy pipeline](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163725/badge.svg?token=d1e810606d21ee50ab07b91076e24552754952406a381d13de8ae5deedd6de3f "buddy pipeline")](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163725)
[![buddy pipeline](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163726/badge.svg?token=d1e810606d21ee50ab07b91076e24552754952406a381d13de8ae5deedd6de3f "buddy pipeline")](https://app.buddy.works/fernalvarez/vuenes-css/pipelines/pipeline/163726)
[![codecov](https://codecov.io/gh/jefer590/vuenes.css/branch/master/graph/badge.svg)](https://codecov.io/gh/jefer590/vuenes.css) [![Greenkeeper badge](https://badges.greenkeeper.io/jefer590/vuenes.css.svg)](https://greenkeeper.io/)
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

In your `main.js` you only need to import the component library and the just use it!

```js
import Vue from 'vue'
import VueNesCss from 'vuenes.css'

Vue.use(VueNesCss)
```

## Components Usage

### NesButton

Props that can receive

- `primary`: To Add the class `is-primary` to the button

- `success`: To Add the class `is-success` to the button

- `warning`: To Add the class `is-warning` to the button

- `error`: To Add the class `is-error` to the button

The component can contain a slot that will be the content inside the button

The component emits the event `click` when clicked

Example:

```vue
<template>
  <div>
    <nes-button
      @click="doSomething"
      primary
    >
      This is a Primary Button!
    </nes-button>

    <nes-button
      success
    >
      This is a Success Button!
    </nes-button>

    <nes-button
      warning
    >
      This is a Warning Button!
    </nes-button>

    <nes-button
      error
    >
      This is a Error Button!
    </nes-button>
  </div>
</template>
```

### NesCheckbox

The component can contain a slot that will be the content inside the checkbox

The component emits the event `select` when the checkbox is selected

Example:

```vue
<template>
  <div>
    <nes-checkbox
      @select="doSomething"
    >
      Do you agree with me?
    </nes-checkbox>
  </div>
</template>
```

### NesContainer

Props that can receive

- `tag`: HTML Tag of the container. Default is `div`

- `title`: The title of the container, also add the `with-title` class to the container

- `title-tag`: The HTML Tag used for the title. Default is `h2`

- `center`: add the `is-center` class

- `dark`: add the `is-dark` class

- `form`: add the `form` class

Example:

```vue
<template>
  <nes-container
    tag="section"
    title="Castlevania II"
    dark
  >
    <p styles="color: white;">What a horrible night to have a curse.</p>
  </nes-container>
</template>
```

### NesInputText

Props that can receive

- `id`: Id + Name used in the Input and Label. **Required**

- `label`: Label used for the input text

- `placeholder`: Placeholder used for the input text

- `inline`: Add `is-inline` class to the wrapper of the input text

- `success`: To Add the class `is-success` to the button

- `warning`: To Add the class `is-warning` to the button

- `error`: To Add the class `is-error` to the button

Example:

```vue
<template>
  <nes-input-text
    id="name"
    label="Name"
    placeholder="Insert Your Name Here!"
    inline
  />
</template>
```

### NesRadioButton

Props that can receive

- `group-name`: Group Name for the Radio Buttons. **Required**

The component can contain a slot that will be the content inside the radio button

Example:

```vue
<template>
  <div>
    <nes-radio-button
      group-name="answer"
    >
      Yep!
    </nes-radio-button>
    <nes-radio-button
      group-name="answer"
    >
      Nope!
    </nes-radio-button>
  </div>
</template>
```

### NesOctocat

Props that can receive

- `animate`: Animates the OctoCat Sprite

Example:

```vue
<template>
  <div>
    <nes-octocat>
    <nes-octocat animate>
  </div>
</template>
```

### NesIcon

Props that can receive

- `name`: The icon name. **Required**

- `medium`: Add `is-medium` class to the icon

- `large`: Add `is-large` class to the icon

- `empty`: Add `is-empty` class to the icon

To find the the icons, please visit: [https://bcrikko.github.io/NES.css/](https://bcrikko.github.io/NES.css/)

Example:

```vue
<template>
  <div>
    <nes-icon
      name="heart"
      empty
    />
    <nes-icon
      name="like"
      medium
    />
    <nes-icon
      name="youtube"
    />
  </div>
</template>
```

### NesController

Props that can receive

- `type`: The type of controller. Only can be `nes` or `snes` and is **required**

- `jp`: Gets the Japanese version of the Controller

Example:

```vue
<template>
  <div>
    <nes-controller
      type="snes"
      jp
    />

    <nes-controller
      type="nes"
    />
  </div>
</template>
```

## Help is welcome!

If you saw any bug or want contribute to this library, feel free to ticket an issue and/or create a PR!
