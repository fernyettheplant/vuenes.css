/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NesButton from '../src/components/NesButton.vue'

const buttonStory = storiesOf('NesButton', module)

buttonStory.add('Normal', () => ({
  components: { NesButton },
  template: '<NesButton @click="click">Normal</NesButton>',
  methods: { click: action('Click Emitted!') }
}))

buttonStory.add('Primary', () => ({
  components: { NesButton },
  template: '<NesButton primary @click="click">Primary</NesButton>',
  methods: { click: action('Click Emitted!') }
}))

buttonStory.add('Success', () => ({
  components: { NesButton },
  template: '<NesButton success @click="click">Success</NesButton>',
  methods: { click: action('Click Emitted!') }
}))

buttonStory.add('Warning', () => ({
  components: { NesButton },
  template: '<NesButton warning @click="click">Warning</NesButton>',
  methods: { click: action('Click Emitted!') }
}))

buttonStory.add('Error', () => ({
  components: { NesButton },
  template: '<NesButton error @click="click">Error</NesButton>',
  methods: { click: action('Click Emitted!') }
}))

buttonStory.add('Disabled', () => ({
  components: { NesButton },
  template: '<NesButton disabled @click="click">Disabled</NesButton>',
  methods: { click: action('Click Emitted!') }
}))
