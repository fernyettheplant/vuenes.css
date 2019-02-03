<template>
  <label>
    <input
      class="nes-radio"
      type="radio"
      :name="groupName"
      :checked="checked"
    >
    <span>
      <!-- Default contents of the Radio button -->
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  props: {
    /**
     * Define the `name` of the radio button
     */
    groupName: {
      type: String,
      required: true
    },
    /**
     * Define if the radio button is checked
     */
    checked: {
      type: Boolean,
      required: false
    }
  }
}
</script>
