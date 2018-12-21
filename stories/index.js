import { storiesOf } from '@storybook/vue'

import GradationButton from '../components/GradationButton.vue'

storiesOf('GradationButton', module)
  .add('link', () => ({
    components: { GradationButton },
    template: `<GradationButton text="Go to Google" to="http://google.com" />`
  }))
  .add('event handler', () => ({
    components: { GradationButton },
    template: `<GradationButton text="Show alert" @click="onClick" />`,
    methods: {
      onClick () {
        alert('clicked!')
      }
    }
  }))
