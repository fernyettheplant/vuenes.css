<template>
  <li
    :class="iconClasses"
    class="icon"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    medium: Boolean,
    large: Boolean,
    empty: Boolean
  },
  computed: {
    iconClasses () {
      return {
        [this.name]: true,
        'is-medium': this.medium,
        'is-large': this.large,
        'is-empty': this.empty
      }
    }
  }
}
</script>
