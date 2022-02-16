import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#CD412B',
        secondary: '#2196f3',
        accent: '#e91e63',
        error: '#ff5722',
        warning: '#ff9800',
        info: '#00BCD4',
        success: '#4caf50'
      },
      dark: {
        primary: '#CD412B',
        secondary: '#1976D2',
        accent: '#C2185B',
        error: '#E64A19',
        warning: '#E65100',
        info: '#0097A7',
        success: '#388E3C'
      }
    }
  }
})
