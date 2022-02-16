<template>
  <v-list>
    <v-list-item
      v-for="(link,index) in links"
      :key="index"
      link
      :to="link.to"
    >
      <v-list-item-icon v-if="link.icon">
        <v-icon v-text="link.icon" />
      </v-list-item-icon>
      <v-list-item-content v-t="link.name" />
    </v-list-item>
    <v-list-item
      rel="noopener"
      link
      href="https://github.com/kwiksilver3441/rust-playground.git"
      target="_blank"
      class="text-capitalize"
    >
      <v-list-item-content>
        {{ $t('suggestAddition') }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data (): {links: Array<{name: string, to: string, icon?: string}>} {
    return {
      links: [
        { name: 'genetics', to: '/', icon: '' }
        // { name: 'blank', to: '/blank' }
        // Add more links here
      ]
    }
  }
})
</script>

<style>

</style>
