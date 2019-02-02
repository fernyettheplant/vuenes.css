/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'

// Import CSS
import('nes.css/css/nes.css')
import('typeface-press-start-2p/index.css')

const req = require.context('../../stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
