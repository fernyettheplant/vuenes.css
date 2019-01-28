<template>
  <div class="message -left">
    <div class="nes-balloon from-left">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/elements/balloons";
@import "~nes.css/scss/utilities/index";
@import "~nes.css/scss/pixel-arts/bcrikko";
</style>
