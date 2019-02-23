/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const containerStory = storiesOf('NesContainer', module)
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

containerStory.add('Normal', () => ({
  components: { NesContainer },
  template: '<NesContainer><p>I am error</p></NesContainer>'
}))

containerStory.add('Dark', () => ({
  components: { NesContainer },
  template: '<NesContainer dark><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>'
}))

containerStory.add('Rounded', () => ({
  components: { NesContainer },
  template: '<NesContainer rounded><p>I am error.</p></NesContainer>'
}))

containerStory.add('Dark And Rounded', () => ({
  components: { NesContainer },
  template: '<NesContainer dark rounded><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>'
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

containerStory.add('Rounded And Dark With Title', () => ({
  components: { NesContainer },
  template: `<NesContainer title="Castlevania II: Simon's Quest" dark rounded><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>`
}))

containerStory.add('Centered And Rounded And Dark With Title', () => ({
  components: { NesContainer },
  template: `<NesContainer title="Castlevania II: Simon's Quest" dark rounded center><p>WHAT A HORRIBLE NIGHT TO HAVE A CURSE.</p></NesContainer>`
}))
