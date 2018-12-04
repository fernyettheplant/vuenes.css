<template>
  <label>
    <input
      class="radio"
      type="radio"
      :name="groupName"
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
    }
  }
}
</script>
