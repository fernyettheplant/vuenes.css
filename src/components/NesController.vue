<template>
  <li :class="controllerClasses" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validate (input) {
        return ['nes', 'snes'].includes(input)
      }
    },
    jp: Boolean
  },
  computed: {
    controllerClasses () {
      const cssClass = `${this.type}-${this.jp ? 'jp-' : ''}logo`

      return {
        [cssClass]: true
      }
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/utilities/index";
@import "~nes.css/scss/pixel-arts/nes-icon";
@import "~nes.css/scss/pixel-arts/nes-jp-icon";
@import "~nes.css/scss/pixel-arts/snes-icon";
@import "~nes.css/scss/pixel-arts/snes-jp-icon";
</style>
