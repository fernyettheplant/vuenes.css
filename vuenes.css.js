import NesButton from './src/components/NesButton.vue'
import NesCheckbox from './src/components/NesCheckbox.vue'
import NesContainer from './src/components/NesContainer.vue'
import NesController from './src/components/NesController.vue'
import NesInputText from './src/components/NesInputText.vue'
import NesOctocat from './src/components/NesOctocat.vue'
import NesIcon from './src/components/NesIcon.vue'
import NesRadioButton from './src/components/NesRadioButton.vue'

// Import CSS
import 'nes.css/css/nes.css'

// Export Components
const Components = {
  NesButton,
  NesCheckbox,
  NesController,
  NesContainer,
  NesInputText,
  NesOctocat,
  NesIcon,
  NesRadioButton
}

const VueNesCssPlugin = {
  install (Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name])
    })
  }
}

export default VueNesCssPlugin
