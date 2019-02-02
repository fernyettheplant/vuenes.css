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
