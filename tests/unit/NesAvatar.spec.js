import { mount } from '@vue/test-utils'
import NesAvatar from '../../src/components/NesAvatar.vue'

describe('NesAvatar.vue', () => {
  const createAvatar = (propsData) => {
    return mount(NesAvatar, {
      propsData: {
        src: 'http://lorempixel.com/g/500/500',
        ...propsData
      }
    })
  }

  it('should render avatar properly', () => {
    const wrapper = createAvatar()

    expect(wrapper.find('img.nes-avatar').exists()).toBeTruthy()
  })

  it('should render avatar with alt', () => {
    const wrapper = createAvatar({
      alt: 'This is a unit Test!'
    })

    expect(wrapper.find('img.nes-avatar').attributes().alt).toBe('This is a unit Test!')
  })

  it('should add is-rounded class if rounded prop is true', () => {
    const wrapper = createAvatar({
      rounded: true
    })

    expect(wrapper.find('img.nes-avatar.is-rounded').exists()).toBeTruthy()
  })

  it('should add is-small class if small prop is true', () => {
    const wrapper = createAvatar({
      small: true
    })

    expect(wrapper.find('img.nes-avatar.is-small').exists()).toBeTruthy()
  })

  it('should add is-medium class if medium prop is true', () => {
    const wrapper = createAvatar({
      medium: true
    })

    expect(wrapper.find('img.nes-avatar.is-medium').exists()).toBeTruthy()
  })

  it('should add is-large class if large prop is true', () => {
    const wrapper = createAvatar({
      large: true
    })

    expect(wrapper.find('img.nes-avatar.is-large').exists()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const wrapper = createAvatar({
      alt: 'this is a unit test!',
      large: true,
      rounded: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
