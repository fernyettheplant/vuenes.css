import { mount } from '@vue/test-utils'
import NesInputTextArea from '../../src/components/NesInputTextArea.vue'

describe('NesInputTextArea.vue', () => {
  const createTextArea = (propsData) => {
    return mount(NesInputTextArea, {
      propsData
    })
  }

  it('should render the text area properly', () => {
    const wrapper = createTextArea({
      id: 'input-test'
    })

    expect(wrapper.find('div.field>textarea#input-test.nes-textarea').exists()).toBeTruthy()
  })

  it('should emit input event', () => {
    const wrapper = createTextArea({
      id: 'input-test'
    })

    const textArea = wrapper.find('div.field>textarea#input-test.nes-textarea')
    textArea.element.value = 'This is a new Value'
    textArea.trigger('input')

    expect(wrapper.emitted('input')).toEqual([['This is a new Value']])
  })

  it('should match snapshot', () => {
    const wrapper = createTextArea({
      id: 'input-test',
      labelText: 'This is a label!',
      initValue: 'Init Value!',
      cols: 50,
      rows: 50
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
