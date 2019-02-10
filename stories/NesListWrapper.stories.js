/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesListWrapper from '../src/components/NesListWrapper.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const listWrapper = storiesOf('NesListWrapper', module)
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

listWrapper.add('With Disc', () => ({
  components: { NesListWrapper },
  template: `
    <NesListWrapper disc>
       <li
          v-for="(item, index) in items"
          :key="index"
       >{{ item }}</li>
    </NesListWrapper>
  `,
  data () {
    return {
      items: [
        'text 1',
        'text 2',
        'text 3'
      ]
    }
  }
}))

listWrapper.add('With Circle', () => ({
  components: { NesListWrapper },
  template: `
    <NesListWrapper circle>
       <li
          v-for="(item, index) in items"
          :key="index"
       >{{ item }}</li>
    </NesListWrapper>
  `,
  data () {
    return {
      items: [
        'text 1',
        'text 2',
        'text 3'
      ]
    }
  }
}))
