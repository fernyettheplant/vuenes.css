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
