import { mount } from '@vue/test-utils'
import NesInputText from '../../src/components/NesInputText.vue'

describe('NesInputText.vue', () => {
  const createInputWrapper = (propsData = {}) => {
    return mount(NesInputText, {
      propsData
    })
  }

  it('should render the component properly', () => {
    const wrapper = createInputWrapper({
      id: 'test-input'
    })

    expect(wrapper.find('div.nes-field>input[type="text"]#test-input.nes-input').exists()).toBe(true)
  })

  it('should print input with label', () => {
    const wrapper = createInputWrapper({
      id: 'test-input',
      label: 'the label!'
    })

    expect(wrapper.find('div.nes-field>label+input[type="text"]#test-input.nes-input').exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('the label!')
  })

  it('should render input with placeholder', () => {
    const wrapper = createInputWrapper({
      id: 'test-input',
      placeholder: 'this is the placeholder'
    })

    expect(wrapper.find('input#test-input').attributes().placeholder).toEqual('this is the placeholder')
  })

  it('should emit input event on input', () => {
    const wrapper = createInputWrapper({
      id: 'test-input'
    })

    // Trigger Click and Emit Three Times
    const selector = 'input.nes-input#test-input'
    wrapper.find(selector).trigger('input')
    wrapper.find(selector).trigger('input')
    wrapper.find(selector).trigger('input')

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input').length).toBe(3)
  })

  it('should match snapshot', () => {
    const wrapper = createInputWrapper({
      id: 'test-input',
      label: 'This is a label',
      placeholder: 'Insert Text',
      inline: true,
      info: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
