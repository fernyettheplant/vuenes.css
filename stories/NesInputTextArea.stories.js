/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NesInputTextArea from '../src/components/NesInputTextArea.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const textAreaStory = storiesOf('NesInputTextArea', module)
  .addDecorator(withBackgrounds([
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
    { name: 'Purple', value: 'purple' },
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white', default: true }
  ]))

textAreaStory.add('TextArea', () => ({
  components: { NesInputTextArea },
  template: '<NesInputTextArea id="text" @input="input"/>',
  methods: {
    input: action('New Text Input Emitted')
  }
}))

textAreaStory.add('With Label', () => ({
  components: { NesInputTextArea },
  template: '<NesInputTextArea id="text" label-text="This is a Label" @input="input" :cols="10" :rows="10"/>',
  methods: {
    input: action('New Text Input Emitted')
  }
}))

textAreaStory.add('With Init Value', () => ({
  components: { NesInputTextArea },
  template: '<NesInputTextArea id="text" label-text="This is a Label" @input="input" :cols="10" :rows="10" init-value="Testing"/>',
  methods: {
    input: action('New Text Input Emitted')
  }
}))
