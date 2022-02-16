<template>
  <v-btn
    icon
    :aria-label="$t('aria.toggleDarkMode')"
    @click="toggleDark"
  >
    <v-icon>
      {{ (!$vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    const isDark = (localStorage.getItem('dark-mode') === 'true')
    if (isDark) {
      this.$vuetify.theme.dark = true
    } else {
      this.$vuetify.theme.dark = false
    }
  },
  methods: {
    toggleDark (): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      if (this.$vuetify.theme.dark === false) {
        localStorage.removeItem('dark-mode')
      } else {
        localStorage.setItem('dark-mode', this.$vuetify.theme.dark.toString())
      }
    }
  }
})
</script>

<style>

</style>
