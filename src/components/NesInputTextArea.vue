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
    /**
     * Define the id of the input
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Define the label text of the input
     * @default Empty String
     */
    labelText: {
      type: String,
      default: () => ''
    },
    /**
     * Define the init value of the input
     * @default Empty String
     */
    initValue: {
      type: String,
      default: () => ''
    },
    /**
     * Define the `cols` of the textarea
     * @default 30
     */
    cols: {
      type: Number,
      default: 30
    },
    /**
     * Define the `rows` of the textarea
     * @default 10
     */
    rows: {
      type: Number,
      default: 10
    }
  },
  /**
   * Initializes `inputValue` using the `initValue` prop
   * @returns {{inputText: (default.props.initValue|{default, type})}}
   */
  data () {
    return {
      inputText: this.initValue
    }
  },
  methods: {
    /**
     * Method that emits the input event to the parent component
     */
    emitInput () {
      /**
       * Fired when someone does an input in the textarea
       */
      this.$emit('input', this.inputText)
    }
  }
}
</script>
