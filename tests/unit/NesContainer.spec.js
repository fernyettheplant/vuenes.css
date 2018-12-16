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
    expect(wrapper.find('div.container').exists()).toBe(true)
    expect(wrapper.text()).toBe('This is a container!')
    expect(wrapper.find('h2.title').exists()).toBe(false)
  })

  it('should render container with "section" html tag', () => {
    const wrapper = createContainerWrapper({
      tag: 'section'
    })

    expect(wrapper.find('section.container').exists()).toBe(true)
  })

  it('should render container title with default html tag', () => {
    const wrapper = createContainerWrapper({
      title: 'Castlevania: Rondo of Blood'
    })

    const titleWrapper = wrapper.find('div.container.with-title>h2.title')
    expect(titleWrapper.exists()).toBe(true)
    expect(titleWrapper.html().trim()).toBe('<h2 class="title">\n    Castlevania: Rondo of Blood\n  </h2>')
    expect(titleWrapper.text()).toBe('Castlevania: Rondo of Blood')
  })

  it('should render container title with h1 html tag', () => {
    const wrapper = createContainerWrapper({
      titleTag: 'h1',
      title: 'Castlevania: Rondo of Blood'
    })

    const titleWrapper = wrapper.find('div.container.with-title>h1.title')
    expect(titleWrapper.exists()).toBe(true)
    expect(titleWrapper.html().trim()).toBe('<h1 class="title">\n    Castlevania: Rondo of Blood\n  </h1>')
    expect(titleWrapper.text()).toBe('Castlevania: Rondo of Blood')
  })

  it('should set "is-center" class if the center prop is set', () => {
    const wrapper = createContainerWrapper({
      center: true
    })

    const centerContainer = wrapper.find('div.container.is-center')

    expect(wrapper.classes()).toContainEqual('is-center')
    expect(centerContainer.exists()).toBe(true)
  })

  it('should set "is-dark" class if the dark prop is set', () => {
    const wrapper = createContainerWrapper({
      dark: true
    })

    const darkContainer = wrapper.find('div.container.is-dark')

    expect(wrapper.classes()).toContainEqual('is-dark')
    expect(darkContainer.exists()).toBe(true)
  })

  it('should set "is-form" class if the form prop is set', () => {
    const wrapper = createContainerWrapper({
      form: true
    })

    const formContainer = wrapper.find('div.container.form')

    expect(wrapper.classes()).toContainEqual('form')
    expect(formContainer.exists()).toBe(true)
  })

  it('should render slot', () => {
    const wrapper = createContainerWrapper({
      tag: 'article',
      title: 'This is my title',
      titleTag: 'h3',
      center: true,
      dark: true
    }, NesButton)

    expect(wrapper.find('article.container.with-title.is-center.is-dark>h3.title+button[type="button"].btn').exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createContainerWrapper({
      tag: 'article',
      title: 'This is my title',
      titleTag: 'h3',
      center: true,
      dark: true
    }, NesButton)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
