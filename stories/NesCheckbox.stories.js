/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NesContainer from '../src/components/NesContainer.vue'
import NesCheckbox from '../src/components/NesCheckbox.vue'

const radiosStory = storiesOf('NesCheckbox', module)

radiosStory.add('Checkboxes', () => ({
  components: { NesContainer, NesCheckbox },
  template:
    '<NesContainer title="Radios">' +
    '<NesCheckbox @select="select" checked>Enable</NesCheckbox>' +
    '</NesContainer>',
  methods: {
    select: action('Select Emitted!')
  }
}))
