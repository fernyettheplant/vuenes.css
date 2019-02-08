/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesBalloonLeftItem from '../src/components/NesBalloonLeftItem.vue'
import NesBalloonRightItem from '../src/components/NesBalloonRightItem.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const balloonsStory = storiesOf('NesBalloons', module)
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
balloonsStory.add('Example', () => ({
  components: { NesContainer, NesBalloonRightItem, NesBalloonLeftItem },
  template:
    '<NesContainer balloon title="Balloons">' +
    '<div class="messages">' +
    '<NesBalloonLeftItem message="Hey there!" />' +
    '<NesBalloonRightItem message="Hello Friendo!" />' +
    '</div>' +
    '</NesContainer>'
}))
