import { mount } from '@vue/test-utils'
import NesIcon from '../../src/components/NesIcon.vue'

describe('NesIcon.vue', () => {
  const createIconWrapper = (propsData = {}) => {
    return mount(NesIcon, {
      propsData
    })
  }

  it('should render icon properly', () => {
    const wrapper = createIconWrapper({
      name: 'like'
    })

    expect(wrapper.find('li.nes-icon.like').exists()).toBe(true)
  })

  it('should render icon medium', () => {
    const wrapper = createIconWrapper({
      name: 'like',
      medium: true
    })

    expect(wrapper.find('li.nes-icon.like.is-medium').exists()).toBe(true)
  })

  it('should render icon large', () => {
    const wrapper = createIconWrapper({
      name: 'like',
      large: true
    })

    expect(wrapper.find('li.nes-icon.like.is-large').exists()).toBe(true)
  })

  it('should render icon empty', () => {
    const wrapper = createIconWrapper({
      name: 'like',
      empty: true
    })

    expect(wrapper.find('li.nes-icon.like.is-empty').exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createIconWrapper({
      name: 'like',
      large: true,
      empty: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
