/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesRadioButton from '../src/components/NesRadioButton.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const radiosStory = storiesOf('NesRadioButton', module)
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

radiosStory.add('Radios', () => ({
  components: { NesContainer, NesRadioButton },
  template: '<NesContainer title="Radios">' +
    '<NesRadioButton group-name="testing" checked>Yes</NesRadioButton>' +
    '<NesRadioButton group-name="testing">No</NesRadioButton>' +
    '<NesRadioButton group-name="testing">Maybe</NesRadioButton>' +
    '</NesContainer>'
}))
