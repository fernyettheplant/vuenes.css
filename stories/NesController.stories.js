/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesController from '../src/components/NesController.vue'

const controllerStory = storiesOf('NesController', module)

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
