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
