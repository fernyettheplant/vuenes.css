/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesBalloonLeftItem from '../src/components/NesBalloonLeftItem.vue'
import NesBalloonRightItem from '../src/components/NesBalloonRightItem.vue'

const balloonsStory = storiesOf('NesBalloons', module)

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
