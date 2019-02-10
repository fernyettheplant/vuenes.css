/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesAvatar from '../src/components/NesAvatar.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const buttonStory = storiesOf('NesAvatar', module)
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
const example = {
  src: 'https://lorempixel.com/g/500/500',
  alt: 'Lorem Pixel Example'
}

buttonStory.add('Normal', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" />',
  data () {
    return example
  }
}))

buttonStory.add('Normal Rounded', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" rounded />',
  data () {
    return example
  }
}))

buttonStory.add('Small', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" small />',
  data () {
    return example
  }
}))

buttonStory.add('Small Rounded', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" small rounded />',
  data () {
    return example
  }
}))

buttonStory.add('Medium', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" medium />',
  data () {
    return example
  }
}))

buttonStory.add('Medium Rounded', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" medium rounded />',
  data () {
    return example
  }
}))

buttonStory.add('Large', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" large />',
  data () {
    return example
  }
}))

buttonStory.add('Large Rounded', () => ({
  components: { NesAvatar },
  template:
    '<NesAvatar :src="src" :alt="alt" large rounded />',
  data () {
    return example
  }
}))
