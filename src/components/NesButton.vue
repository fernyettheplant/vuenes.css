<template>
  <button
    class="btn"
    :class="buttonClasses"
    type="button"
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean
  },
  computed: {
    buttonClasses () {
      return {
        'is-primary': this.primary,
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
