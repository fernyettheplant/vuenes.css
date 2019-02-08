/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesContainer from '../src/components/NesContainer.vue'
import NesIcon from '../src/components/NesIcon.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const iconStory = storiesOf('NesIcon', module)
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

iconStory.add('Reactions', () => ({
  components: { NesContainer, NesIcon },
  template: `
<NesContainer title="Reaction">
  <NesIcon name="heart" small />
  <NesIcon name="heart"  />
  <NesIcon name="heart" medium />
  <NesIcon name="heart" large />
  <NesIcon name="heart" empty />

  <NesIcon name="star" small />
  <NesIcon name="star"  />
  <NesIcon name="star" medium />
  <NesIcon name="star" large />

  <NesIcon name="star" half />
  <NesIcon name="star" medium half />
  <NesIcon name="star" large half />

  <NesIcon name="star" empty />
  <NesIcon name="star" medium empty />
  <NesIcon name="star" large empty />

  <NesIcon name="like" small />
  <NesIcon name="like"  />
  <NesIcon name="like" medium />
  <NesIcon name="like" large />
  <NesIcon name="like" empty />
</NesContainer>
  `
}))

iconStory.add('Social Networks', () => ({
  components: { NesContainer, NesIcon },
  template: `
<NesContainer title="SNS">
  <NesIcon name="twitter" small />
  <NesIcon name="twitter"  />
  <NesIcon name="twitter" medium />
  <NesIcon name="twitter" large />

  <NesIcon name="facebook" small />
  <NesIcon name="facebook"  />
  <NesIcon name="facebook" medium />
  <NesIcon name="facebook" large />

  <NesIcon name="github" small />
  <NesIcon name="github"  />
  <NesIcon name="github" medium />
  <NesIcon name="github" large />

  <NesIcon name="youtube" small />
  <NesIcon name="youtube"  />
  <NesIcon name="youtube" medium />
  <NesIcon name="youtube" large />

  <NesIcon name="google" small />
  <NesIcon name="google"  />
  <NesIcon name="google" medium />
  <NesIcon name="google" large />

  <NesIcon name="medium" small />
  <NesIcon name="medium"  />
  <NesIcon name="medium" medium />
  <NesIcon name="medium" large />

  <NesIcon name="twitch" small />
  <NesIcon name="twitch"  />
  <NesIcon name="twitch" medium />
  <NesIcon name="twitch" large />

  <NesIcon name="reddit" small />
  <NesIcon name="reddit"  />
  <NesIcon name="reddit" medium />
  <NesIcon name="reddit" large />

  <NesIcon name="whatsapp" small />
  <NesIcon name="whatsapp"  />
  <NesIcon name="whatsapp" medium />
  <NesIcon name="whatsapp" large />

  <NesIcon name="gmail" small />
  <NesIcon name="gmail"  />
  <NesIcon name="gmail" medium />
  <NesIcon name="gmail" large />

  <NesIcon name="linkedin" small />
  <NesIcon name="linkedin"  />
  <NesIcon name="linkedin" medium />
  <NesIcon name="linkedin" large />
</NesContainer>
  `
}))

iconStory.add('Other', () => ({
  components: { NesContainer, NesIcon },
  template: `
<NesContainer title="Other">
  <NesIcon name="close" small />
  <NesIcon name="close"  />
  <NesIcon name="close" medium />
  <NesIcon name="close" large />

  <NesIcon name="trophy" small />
  <NesIcon name="trophy"  />
  <NesIcon name="trophy" medium />
  <NesIcon name="trophy" large />
</NesContainer>
  `
}))
