import { mount } from '@vue/test-utils'
import NesListWrapper from '../../src/components/NesListWrapper.vue'

describe('NesListWrapper.vue', () => {
  it('should print list as discs', () => {
    const wrapper = mount(NesListWrapper, {
      propsData: {
        disc: true
      },
      slots: {
        default: `
        <li
            v-for="(item, index) in ['item 1', 'item 2']"
            :key="index"
         >{{ item }}</li>
        `
      }
    })
    expect(wrapper.find('div.lists>ul.nes-list.is-disc').exists()).toBe(true)
    expect(wrapper.findAll('div.lists>ul.nes-list.is-disc>li').length).toBe(2)
  })

  it('should print list as discs', () => {
    const wrapper = mount(NesListWrapper, {
      propsData: {
        circle: true
      },
      slots: {
        default: `
        <li
            v-for="(item, index) in ['item 1', 'item 2']"
            :key="index"
         >{{ item }}</li>
        `
      }
    })
    expect(wrapper.find('div.lists>ul.nes-list.is-circle').exists()).toBe(true)
    expect(wrapper.findAll('div.lists>ul.nes-list.is-circle>li').length).toBe(2)
  })
})
