<template>
  <div
    :class="{'is-inline': inline}"
    class="field"
  >
    <label
      v-if="containsLabel"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      type="text"
      :class="inputClasses"
      class="input"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    inline: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean
  },
  computed: {
    containsLabel () {
      return !!this.label
    },
    inputClasses () {
      return {
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error
      }
    }
  }
}
</script>
