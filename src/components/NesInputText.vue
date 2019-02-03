<template>
  <div
    :class="{'is-inline': inline}"
    class="nes-field"
  >
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="inputValue"
      type="text"
      :class="inputClasses"
      class="nes-input"
      :placeholder="placeholder"
      @input="emitInput"
    >
  </div>
</template>

<script>
/**
 * Vue Component implementation of the Nes Input Text
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
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
    label: {
      type: String,
      default: () => ''
    },
    /**
     * Define te placeholder of the input
     * @default Empty String
     */
    placeholder: {
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
     * Define if the Input is type inline by using the `is-inline` css class
     * @default false
     */
    inline: Boolean,
    /**
     * Define if the Input is type success by using the `is-success` css class
     * @default false
     */
    success: Boolean,
    /**
     * Define if the Input is type warning by using the `is-warning` css class
     * @default false
     */
    warning: Boolean,
    /**
     * Define if the Input is type error by using the `is-error` css class
     * @default false
     */
    error: Boolean
  },
  /**
   * Initializes `inputValue` using the `initValue` prop
   * @returns {{inputValue: (default.props.initValue|{default, type})}}
   */
  data () {
    return {
      inputValue: this.initValue
    }
  },
  computed: {
    /**
     * Calculate the css classes to be used for the input text depending of the props
     * @returns {{'is-error': BooleanConstructor, 'is-success': BooleanConstructor, 'is-warning': BooleanConstructor}}
     */
    inputClasses () {
      return {
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error
      }
    }
  },
  methods: {
    /**
     * Method that emits the input event to the parent component
     */
    emitInput () {
      /**
       * Fired when someone does an input in the input text
       */
      this.$emit('input', this.inputValue)
    }
  }
}
</script>
