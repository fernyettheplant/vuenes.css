<template>
  <div class="lists">
    <ul
      class="nes-list"
      :class="listClasses"
    >
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    disc: Boolean,
    circle: Boolean
  },
  computed: {
    listClasses () {
      return {
        'is-disc': this.disc,
        'is-circle': this.circle
      }
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/utilities/index";
@import "~nes.css/scss/elements/lists";
</style>
