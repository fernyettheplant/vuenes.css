/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesRadioButton from '../src/components/NesRadioButton.vue'

const radiosStory = storiesOf('NesRadioButton', module)

radiosStory.add('Radios', () => ({
  components: { NesContainer, NesRadioButton },
  template: '<NesContainer title="Radios">' +
    '<NesRadioButton group-name="testing" checked>Yes</NesRadioButton>' +
    '<NesRadioButton group-name="testing">No</NesRadioButton>' +
    '<NesRadioButton group-name="testing">Maybe</NesRadioButton>' +
    '</NesContainer>'
}))
