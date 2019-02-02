<template>
  <div class="field">
    <label
      v-if="labelText"
      :for="id"
    >
      {{ labelText }}
    </label>
    <textarea
      :id="id"
      v-model="inputText"
      class="nes-textarea"
      :cols="cols"
      :rows="rows"
      @input.prevent="emitInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      default: () => ''
    },
    initValue: {
      type: String,
      default: () => ''
    },
    cols: {
      type: Number,
      default: 30
    },
    rows: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      inputText: this.initValue
    }
  },
  methods: {
    emitInput () {
      this.$emit('input', this.inputText)
    }
  }
}
</script>
