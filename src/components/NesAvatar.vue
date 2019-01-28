<template>
  <img
    :src="src"
    :alt="alt"
    class="nes-avatar"
    :class="nesAvatarClasses"
  >
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: () => ''
    },
    alt: {
      type: String,
      default: () => ''
    },
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    rounded: Boolean
  },
  computed: {
    nesAvatarClasses () {
      return {
        'is-small': this.small,
        'is-medium': this.medium,
        'is-large': this.large,
        'is-rounded': this.rounded
      }
    }
  }
}
</script>

<style lang="scss">
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/elements/avatar";
</style>
