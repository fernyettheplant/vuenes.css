import { mount } from '@vue/test-utils'
import NesRadioButton from '../../src/components/NesRadioButton.vue'

describe('NesRadioButton.vue', () => {
  const createRadioButtonWrapper = (propsData = {}, slot) => {
    return mount(NesRadioButton, {
      propsData,
      slots: {
        default: slot || 'I am a radio button!'
      }
    })
  }

  it('should render component properly', () => {
    const wrapper = createRadioButtonWrapper({
      groupName: 'testgroup'
    })

    const radioInput = wrapper.find('label>input[type="radio"][name="testgroup"].nes-radio')
    expect(radioInput.exists()).toBe(true)
    expect(wrapper.find('label>span').text()).toEqual('I am a radio button!')
  })

  it('should render slot properly', () => {
    const wrapper = createRadioButtonWrapper({
      groupName: 'testgroup'
    }, 'This is a text in a slot')

    const slot = wrapper.find('label>span')
    expect(slot.exists()).toBe(true)
    expect(slot.text()).toEqual('This is a text in a slot')
  })

  it('should match snapshot', () => {
    const wrapper = createRadioButtonWrapper({
      groupName: 'testgroup'
    }, 'This is a text in a slot')

    expect(wrapper.html()).toMatchSnapshot()
  })
})
