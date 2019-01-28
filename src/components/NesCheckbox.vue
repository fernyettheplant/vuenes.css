<template>
  <label>
    <input
      type="checkbox"
      class="nes-checkbox"
      :checked="checked"
      @click="click"
    >
    <span>
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/utilities/index";
@import "~nes.css/scss/elements/checkboxes";
</style>
