/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesProgressBar from '../src/components/NesProgressBar.vue'

const progressBarStory = storiesOf('NesProgressBar', module)

progressBarStory.add('Normal', () => ({
  components: { NesProgressBar },
  template: '<NesProgressBar :value="90" :max="100"/>'
}))

progressBarStory.add('Primary', () => ({
  components: { NesProgressBar },
  template: '<NesProgressBar :value="80" :max="100" primary/>'
}))

progressBarStory.add('Success', () => ({
  components: { NesProgressBar },
  template: '<NesProgressBar :value="50" :max="100" success/>'
}))

progressBarStory.add('Warning', () => ({
  components: { NesProgressBar },
  template: '<NesProgressBar :value="30" :max="100" warning/>'
}))

progressBarStory.add('Error', () => ({
  components: { NesProgressBar },
  template: '<NesProgressBar :value="10" :max="100" error/>'
}))

progressBarStory.add('Pattern', () => ({
  components: { NesProgressBar },
  template: '<NesProgressBar :value="50" :max="100" pattern/>'
}))
