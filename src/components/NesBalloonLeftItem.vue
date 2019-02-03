<template>
  <div class="message -left">
    <div class="nes-balloon from-left">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
/**
 * Vue Component implementation of the Nes Balloon in the Left Side
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Define the message of the balloon message
     * @default Empty String
     */
    message: {
      type: String,
      default: () => ''
    }
  }
}
</script>
