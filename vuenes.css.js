import NesAvatar from './src/components/NesAvatar.vue'
import NesBalloonLeftItem from './src/components/NesBalloonLeftItem.vue'
import NesBalloonRightItem from './src/components/NesBalloonRightItem.vue'
import NesButton from './src/components/NesButton.vue'
import NesCheckbox from './src/components/NesCheckbox.vue'
import NesContainer from './src/components/NesContainer.vue'
import NesController from './src/components/NesController.vue'
import NesIcon from './src/components/NesIcon.vue'
import NesInputText from './src/components/NesInputText.vue'
import NesInputTextArea from './src/components/NesInputTextArea.vue'
import NesListWrapper from './src/components/NesListWrapper.vue'
import NesOctocat from './src/components/NesOctocat.vue'
import NesRadioButton from './src/components/NesRadioButton.vue'
import NesProgressBar from './src/components/NesProgressBar.vue'

// Import CSS
import('nes.css/css/nes.css')
import('typeface-press-start-2p/index.css')

// Export Components
const Components = {
  NesAvatar,
  NesBalloonLeftItem,
  NesBalloonRightItem,
  NesButton,
  NesCheckbox,
  NesController,
  NesContainer,
  NesInputText,
  NesInputTextArea,
  NesListWrapper,
  NesOctocat,
  NesIcon,
  NesRadioButton,
  NesProgressBar
}

const VueNesCssPlugin = {
  install (Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name])
    })
  }
}

// Export As a Plugin
export default VueNesCssPlugin

// Export as individual Components
export {
  NesAvatar,
  NesBalloonLeftItem,
  NesBalloonRightItem,
  NesButton,
  NesCheckbox,
  NesController,
  NesContainer,
  NesInputText,
  NesInputTextArea,
  NesListWrapper,
  NesOctocat,
  NesIcon,
  NesRadioButton,
  NesProgressBar
}
