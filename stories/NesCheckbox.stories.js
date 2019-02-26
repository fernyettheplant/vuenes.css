/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NesContainer from '../src/components/NesContainer.vue'
import NesCheckbox from '../src/components/NesCheckbox.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const radiosStory = storiesOf('NesCheckbox', module)
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

radiosStory.add('Normal', () => ({
  components: { NesContainer, NesCheckbox },
  template:
    '<NesContainer title="Checkboxes">' +
    '<NesCheckbox @select="select" checked>Enable</NesCheckbox>' +
    '</NesContainer>',
  methods: {
    select: action('Select Emitted!')
  }
}))

radiosStory.add('Dark', () => ({
  components: { NesContainer, NesCheckbox },
  template:
    '<NesContainer title="Checkboxes">' +
    '<NesCheckbox dark @select="select" checked>Enable</NesCheckbox>' +
    '</NesContainer>',
  methods: {
    select: action('Select Emitted!')
  }
}))
