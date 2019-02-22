import { mount } from '@vue/test-utils'
import NesDialog from '../../src/components/NesDialog.vue'
import NesButton from '../../src/components/NesButton.vue'

describe('NesDialog.vue', () => {
  const createDialogWrapper = (propsData = {}, slot) => {
    return mount(NesDialog, {
      propsData,
      slots: {
        default: slot || 'This is a dialog!'
      }
    })
  }

  it('should render component properly without props', () => {
    const wrapper = createDialogWrapper()

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('dialog.nes-dialog').exists()).toBe(true)
    expect(wrapper.text()).toBe('This is a dialog!')
  })

  it('should set "is-rounded" class if the rounded prop is set', () => {
    const wrapper = createDialogWrapper({
      rounded: true
    })

    const roundedDialog = wrapper.find('dialog.nes-dialog.is-rounded')

    expect(roundedDialog.classes()).toContainEqual('is-rounded')
    expect(roundedDialog.exists()).toBe(true)
  })

  it('should set "is-dark" class if the dark prop is set', () => {
    const wrapper = createDialogWrapper({
      dark: true
    })

    const darkDialog = wrapper.find('dialog.nes-dialog.is-dark')

    expect(darkDialog.classes()).toContainEqual('is-dark')
    expect(darkDialog.exists()).toBe(true)
  })

  it('should set "is-dark" and "is-rounded" class if the dark and rounded prop is set', () => {
    const wrapper = createDialogWrapper({
      dark: true,
      rounded: true
    })

    const darkAndRoundedDialog = wrapper.find('dialog.nes-dialog.is-dark.is-rounded')
    const classes = darkAndRoundedDialog.classes()

    expect(classes).toContainEqual('is-dark')
    expect(classes).toContainEqual('is-rounded')
    expect(darkAndRoundedDialog.exists()).toBe(true)
  })

  it('should render slot', () => {
    const wrapper = createDialogWrapper({
      dark: true
    }, NesButton)

    expect(wrapper.find('dialog.nes-dialog.is-dark>button[type="button"].nes-btn').exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createDialogWrapper({
      rounded: true,
      dark: true,
      open: true
    }, NesButton)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
