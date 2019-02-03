import { mount } from '@vue/test-utils'
import NesProgressBar from '../../src/components/NesProgressBar.vue'

describe('NesProgressBar.vue', () => {
  const createProgressBar = (propsData) => {
    return mount(NesProgressBar, {
      propsData
    })
  }

  it('should render bar properly', () => {
    const wrapper = createProgressBar({
      value: 50,
      max: 100
    })

    expect(wrapper.find('progress.nes-progress').exists()).toBeTruthy()
  })

  it('should add \'is-primary\' class if prop primary is true', () => {
    const wrapper = createProgressBar({
      value: 50,
      max: 100,
      primary: true
    })

    expect(wrapper.find('progress.nes-progress.is-primary').exists()).toBeTruthy()
  })

  it('should add \'is-success\' class if prop success is true', () => {
    const wrapper = createProgressBar({
      value: 50,
      max: 100,
      success: true
    })

    expect(wrapper.find('progress.nes-progress.is-success').exists()).toBeTruthy()
  })

  it('should add \'is-warning\' class if prop warning is true', () => {
    const wrapper = createProgressBar({
      value: 50,
      max: 100,
      warning: true
    })

    expect(wrapper.find('progress.nes-progress.is-warning').exists()).toBeTruthy()
  })

  it('should add \'is-error\' class if prop error is true', () => {
    const wrapper = createProgressBar({
      value: 50,
      max: 100,
      error: true
    })

    expect(wrapper.find('progress.nes-progress.is-error').exists()).toBeTruthy()
  })

  it('should add \'is-pattern\' class if prop pattern is true', () => {
    const wrapper = createProgressBar({
      value: 50,
      max: 100,
      pattern: true
    })

    expect(wrapper.find('progress.nes-progress.is-pattern').exists()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const wrapper = createProgressBar({
      value: 80,
      max: 100,
      pattern: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
