import { mount } from '@vue/test-utils'
import NesOctocat from '../../src/components/NesOctocat.vue'

describe('NesOctocat.vue', () => {
  const createOctocatWrapper = (propsData = {}) => {
    return mount(NesOctocat, {
      propsData
    })
  }

  it('should render octocat icon', () => {
    const wrapper = createOctocatWrapper()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContainEqual('octocat')
    expect(wrapper.find('li.octocat').exists()).toBe(true)
  })

  it('should render octocat icon animated of prop animate is set up', () => {
    const wrapper = createOctocatWrapper({
      animate: true
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContainEqual('animate')
    expect(wrapper.find('li.octocat.animate').exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createOctocatWrapper({
      animate: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
