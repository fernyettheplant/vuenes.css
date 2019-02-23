import { mount } from '@vue/test-utils'
import NesContainer from '../../src/components/NesContainer.vue'
import NesButton from '../../src/components/NesButton.vue'

describe('NesContainer.vue', () => {
  const createContainerWrapper = (propsData = {}, slot) => {
    return mount(NesContainer, {
      propsData,
      slots: {
        default: slot || 'This is a container!'
      }
    })
  }

  it('should render component properly without props', () => {
    const wrapper = createContainerWrapper()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('section.nes-container').exists()).toBe(true)
    expect(wrapper.text()).toBe('This is a container!')
    expect(wrapper.find('h2.title').exists()).toBe(false)
  })

  it('should set "is-centered" class if the center prop is set', () => {
    const wrapper = createContainerWrapper({
      center: true
    })

    const centerContainer = wrapper.find('section.nes-container.is-centered')

    expect(wrapper.classes()).toContainEqual('is-centered')
    expect(centerContainer.exists()).toBe(true)
  })

  it('should set "is-dark" class if the dark prop is set', () => {
    const wrapper = createContainerWrapper({
      dark: true
    })

    const darkContainer = wrapper.find('section.nes-container.is-dark')

    expect(wrapper.classes()).toContainEqual('is-dark')
    expect(darkContainer.exists()).toBe(true)
  })

  it('should set "is-form" class if the form prop is set', () => {
    const wrapper = createContainerWrapper({
      form: true
    })

    const formContainer = wrapper.find('section.nes-container.form')

    expect(wrapper.classes()).toContainEqual('form')
    expect(formContainer.exists()).toBe(true)
  })

  it('should render slot', () => {
    const wrapper = createContainerWrapper({
      title: 'This is my title',
      center: true,
      dark: true
    }, NesButton)

    expect(wrapper.find('section.nes-container.with-title.is-centered.is-dark>h2.title+button[type="button"].nes-btn').exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createContainerWrapper({
      title: 'This is my title',
      center: true,
      dark: true
    }, NesButton)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
