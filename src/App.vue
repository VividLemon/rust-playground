<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <navbar />
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        :aria-label="$t('aria.menu')"
        @click="drawer = !drawer"
      />
      <v-toolbar-title
        class="text-capitalize"
      >
        {{ $t('rustPlayground') }}
      </v-toolbar-title>
      <v-spacer />
      <dark-button />
      <translate-menu />
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        style="min-height: 75vh;"
        class="mb-16"
      >
        <router-view />
      </v-container>
      <custom-footer class="mt-16" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomFooter from './components/menu/CustomFooter.vue'
import DarkButton from './components/menu/DarkButton.vue'
import Navbar from './components/menu/NavBar.vue'
import TranslateMenu from './components/menu/TranslateMenu.vue'

export default Vue.extend({
  name: 'App',
  components: { TranslateMenu, DarkButton, Navbar, CustomFooter },
  data: () => ({
    clipped: false,
    drawer: false,
    miniVariant: false
  })
})
</script>
