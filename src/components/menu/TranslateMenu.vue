<template>
  <v-menu
    offset-y
    open-on-hover
  >
    <template #activator="{ on, attrs }">
      <v-btn
        :aria-label="$t('aria.translateMenu')"
        v-bind="attrs"
        tile
        icon
        v-on="on"
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="language in $i18n.availableLocales"
        :key="language"
        class="text-uppercase"
        @click="changeLanguage(language)"
      >
        {{ language }}
      </v-list-item>
      <v-list-item
        rel="noopener"
        link
        href="https://github.com/kwiksilver3441/rust-playground.git"
        target="_blank"
        class="text-capitalize"
      >
        {{ $t('helpTranslate') }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    const lang = localStorage.getItem('i18n-redirected')
    if (lang != null) {
      this.$i18n.locale = lang
    }
  },
  methods: {
    changeLanguage (language: string): void {
      this.$i18n.locale = language
      if (language !== 'en') {
        localStorage.setItem('i18n-redirected', language)
      } else {
        localStorage.removeItem('i18n-redirected')
      }
    }
  }
})
</script>

<style>

</style>
