import { mount } from '@vue/test-utils'
import NesCheckbox from '../../src/components/NesCheckbox.vue'

describe('NesCheckbox.vue', () => {
  const createCheckboxWrapper = (propsData = {}, slot) => {
    return mount(NesCheckbox, {
      propsData,
      slots: {
        default: slot || 'I am a checkbox!'
      }
    })
  }

  it('should render the checkbox properly', () => {
    const wrapper = createCheckboxWrapper()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('label>input[type="checkbox"].nes-checkbox').exists()).toBe(true)
    expect(wrapper.text()).toBe('I am a checkbox!')
  })

  it('should emit select event on click', () => {
    const wrapper = createCheckboxWrapper()

    // Trigger Click and Emit Three Times
    const selector = 'label>input[type="checkbox"].nes-checkbox'
    wrapper.find(selector).trigger('click')
    wrapper.find(selector).trigger('click')
    wrapper.find(selector).trigger('click')

    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('select').length).toBe(3)
  })

  it('should print html inside slot', () => {
    const wrapper = createCheckboxWrapper({}, '<h2>Hello there!</h2>')
    const slot = wrapper.find('span')

    expect(wrapper.exists()).toBe(true)
    expect(slot.exists()).toBe(true)
    expect(slot.html()).toBe('<span><h2>Hello there!</h2></span>')
  })

  it('should match snapshot', () => {
    const wrapper = createCheckboxWrapper({}, '<h2>Hello there!</h2>')

    expect(wrapper.html()).toMatchSnapshot()
  })
})
