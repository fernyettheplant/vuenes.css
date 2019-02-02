<template>
  <li
    :class="iconClasses"
    class="nes-icon"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    empty: Boolean,
    half: Boolean
  },
  computed: {
    iconClasses () {
      return {
        [this.name]: true,
        'is-small': this.small,
        'is-medium': this.medium,
        'is-large': this.large,
        'is-empty': this.empty,
        'is-half': this.half
      }
    }
  }
}
</script>
