<template>
  <label>
    <input
      type="checkbox"
      class="checkbox"
      @click="click"
    >
    <span>
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  methods: {
    click () {
      this.$emit('select')
    }
  }
}
</script>
