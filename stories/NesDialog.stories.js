/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import NesButton from '../src/components/NesButton.vue'
import NesDialog from '../src/components/NesDialog.vue'
import { withBackgrounds } from '@storybook/addon-backgrounds'

const dialogStory = storiesOf('NesDialog', module)
  .addDecorator(withBackgrounds([
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
    { name: 'Purple', value: 'purple' },
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white', default: true }
  ]))

const toggleBtn = `<NesButton @click="toggle" style="margin-top:-300px">Toggle dialog</NesButton>`

const form = `<form method="dialog">
  <p class="title">Dialog</p>
  <p>Alert: this is a dialog.</p>
  <menu class="dialog-menu">
    <NesButton @click="toggle">Cancel</NesButton>
    <NesButton primary @click="toggle">Confirm</NesButton>
  </menu>
</form>`

const storyOptions = [
  {
    title: 'Normal',
    prop: '',
  },
  {
    title: 'Dark',
    prop: 'dark',
  },
  {
    title: 'Rounded',
    prop: 'rounded',
  },
  {
    title: 'Dark And Rounded',
    prop: 'dark rounded'
  }
]

storyOptions.forEach((story, i) => {
  dialogStory.add(story.title, () => ({
    components: { NesDialog, NesButton },
    data: () => ({ open: true }),
    template: `<div>${toggleBtn}<NesDialog ${story.prop} :open.sync="open">${form}</NesDialog></div>`,
    methods: { toggle() { this.open = !this.open } }
  }))
})
