import { mount } from '@vue/test-utils'
import NesController from '../../src/components/NesController.vue'

describe('NesController.vue', () => {
  const createControllerWrapper = (propsData = {}) => {
    return mount(NesController, {
      propsData
    })
  }

  it('should render the nes controller properly', () => {
    const wrapper = createControllerWrapper({
      type: 'nes'
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props('type')).toBe('nes')
    expect(wrapper.find('li.nes-logo').exists()).toBe(true)
  })

  it('should render the snes controller properly', () => {
    const wrapper = createControllerWrapper({
      type: 'snes'
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props('type')).toBe('snes')
    expect(wrapper.find('li.snes-logo').exists()).toBe(true)
  })

  it('should render the japanese nes controller properly', () => {
    const wrapper = createControllerWrapper({
      type: 'nes',
      jp: true
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props('type')).toBe('nes')
    expect(wrapper.find('li.nes-jp-logo').exists()).toBe(true)
  })

  it('should render the japanese snes controller properly', () => {
    const wrapper = createControllerWrapper({
      type: 'snes',
      jp: true
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props('type')).toBe('snes')
    expect(wrapper.find('li.snes-jp-logo').exists()).toBe(true)
  })

  it('should fail prop validation', () => {
    const wrapper = createControllerWrapper({
      type: 'invalid'
    })

    expect(wrapper.vm.$options.props.type.validate()).toBeFalsy()
  })

  it('should match snapshot', () => {
    const wrapper = createControllerWrapper({
      type: 'snes',
      jp: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
