import { mount } from '@vue/test-utils'
import NesBalloonLeftItem from '../../src/components/NesBalloonLeftItem.vue'

describe('NesBalloonLeftItem.vue', () => {
  it('should render empty message', () => {
    const wrapper = mount(NesBalloonLeftItem)
    expect(wrapper.find('div.message.-left>div.nes-balloon.from-left>p').text()).toBe('')
  })

  it('should match snapshot', () => {
    const wrapper = mount(NesBalloonLeftItem, {
      propsData: {
        message: 'This is a message from the left!'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
