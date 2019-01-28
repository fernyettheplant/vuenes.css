/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesListWrapper from '../src/components/NesListWrapper.vue'

const listWrapper = storiesOf('NesListWrapper', module)

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
