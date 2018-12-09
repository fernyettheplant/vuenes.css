import { mount } from '@vue/test-utils'
import NesButton from '../../src/components/NesButton.vue'

describe('NesButton.vue', () => {
  const createButtonWrapper = (propsData = {}, slots = {}) => {
    return mount(NesButton, {
      propsData
    })
  }

  it('should render button with proper button tag', () => {
    const wrapper = createButtonWrapper()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should render button with proper button tag', () => {
    const wrapper = createButtonWrapper()
    const buttonClasses = wrapper.classes()

    expect(buttonClasses.length).toBe(1)
    expect(buttonClasses).toContainEqual('btn')
  })

  it('should emit click event', () => {
    const wrapper = createButtonWrapper()

    // Emit Click three times
    wrapper.vm.$emit('click')
    wrapper.vm.$emit('click')
    wrapper.vm.$emit('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click').length).toBe(3)
  })

  it('should add \'is-primary\' class if primary prop is added', () => {
    const wrapper = createButtonWrapper({
      primary: true
    })
    const buttonClasses = wrapper.classes()

    expect(buttonClasses.length).toBe(2)
    expect(buttonClasses).toContainEqual('is-primary')
  })

  it('should add \'is-success\' class if success prop is added', () => {
    const wrapper = createButtonWrapper({
      success: true
    })
    const buttonClasses = wrapper.classes()

    expect(buttonClasses.length).toBe(2)
    expect(buttonClasses).toContainEqual('is-success')
  })

  it('should add \'is-warning\' class if warning prop is added', () => {
    const wrapper = createButtonWrapper({
      warning: true
    })
    const buttonClasses = wrapper.classes()

    expect(buttonClasses.length).toBe(2)
    expect(buttonClasses).toContainEqual('is-warning')
  })

  it('should add \'is-error\' class if error prop is added', () => {
    const wrapper = createButtonWrapper({
      error: true
    })
    const buttonClasses = wrapper.classes()

    expect(buttonClasses.length).toBe(2)
    expect(buttonClasses).toContainEqual('is-error')
  })
})
