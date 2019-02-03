<template>
  <div class="lists">
    <ul
      class="nes-list"
      :class="listClasses"
    >
      <!-- Default Slot for the Contents of the List -->
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Define if the wrapper uses discs in the list by using the `is-disc` css class
     * @default false
     */
    disc: Boolean,
    /**
     * Define if the wrapper uses circles in the list by using the `is-circle` css class
     * @default false
     */
    circle: Boolean
  },
  computed: {
    /**
     *  Computed Property that calculate the css classes depending of the props used.
     * @returns {{'is-disc': BooleanConstructor, 'is-circle': BooleanConstructor}}
     */
    listClasses () {
      return {
        'is-disc': this.disc,
        'is-circle': this.circle
      }
    }
  }
}
</script>
