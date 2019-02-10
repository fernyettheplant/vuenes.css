/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesController from '../src/components/NesController.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const controllerStory = storiesOf('NesController', module)
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

controllerStory.add('Showcase', () => ({
  components: { NesContainer, NesController },
  template: `
<NesContainer title="Controllers">
  <NesController type="nes" />
  <NesController type="nes" jp />

    <NesController type="snes" />
  <NesController type="snes" jp />
</NesContainer>
`
}))
