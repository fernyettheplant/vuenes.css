<template>
  <label>
    <input
      class="nes-radio"
      type="radio"
      :name="groupName"
      :checked="checked"
    >
    <span>
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  props: {
    groupName: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/utilities/index";
@import "~nes.css/scss/elements/radios";
</style>
