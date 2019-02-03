import { mount } from '@vue/test-utils'
import NesBalloonRightItem from '../../src/components/NesBalloonRightItem.vue'

describe('NesBalloonRightItem.vue', () => {
  it('should render empty message', () => {
    const wrapper = mount(NesBalloonRightItem)
    expect(wrapper.find('div.message.-right>div.nes-balloon.from-right>p').text()).toBe('')
  })

  it('should match snapshot', () => {
    const wrapper = mount(NesBalloonRightItem, {
      propsData: {
        message: 'This is a message from the right!'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
