/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'

const containerStory = storiesOf('NesContainer', module)

containerStory.add('Normal', () => ({
  components: { NesContainer },
  template: '<NesContainer><p>I am error</p></NesContainer>'
}))

containerStory.add('Dark', () => ({
  components: { NesContainer },
  template: '<NesContainer dark><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>'
}))

containerStory.add('With Title', () => ({
  components: { NesContainer },
  template: `<NesContainer title="Zelda II"><p>I am error.</p></NesContainer>`
}))

containerStory.add('Dark With Title', () => ({
  components: { NesContainer },
  template: `<NesContainer title="Castlevania II: Simon's Quest" dark><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>`
}))

containerStory.add('Centered With Title', () => ({
  components: { NesContainer },
  template: `<NesContainer title="Zelda II" center><p>I am error.</p></NesContainer>`
}))

containerStory.add('Centered Dark With Title', () => ({
  components: { NesContainer },
  template: `<NesContainer title="Castlevania II: Simon's Quest" dark center><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>`
}))
