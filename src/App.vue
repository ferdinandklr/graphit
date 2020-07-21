<!--
  This file controls the entire app
    -> global styling (palette, themes, ...)
    -> display the right view
-->

<template>
  <div id="app" :class="{ 'theme-light': theme==='light', 'theme-dark': theme==='dark' }">

    <!-- code related to windows -->
    <titlebar />
    <window-border />

    <!-- show the right view -->
    <v-splitter>
      <sidebar />
    </v-splitter>

  </div>
</template>

<script>
// import store
import { theme } from '@/stores/AppState'

// import components
import Titlebar from '@/components/Titlebar'
import WindowBorder from '@/components/WindowBorder'
// import HorizontalSplitter from '@/components/structure/HorizontalSplitter'
import VerticalSplitter from '@/components/structure/VerticalSplitter'
import Sidebar from '@/components/sidebar/Sidebar'

export default {
  name: 'App',
  components: {
    titlebar: Titlebar,
    'window-border': WindowBorder,
    // 'h-splitter': HorizontalSplitter,
    'v-splitter': VerticalSplitter,
    sidebar: Sidebar
  },
  setup() {
    return {
      theme
    }
  }
}
</script>

<style lang="sass">
// import global sass
@import "./assets/typo/typo.css"
@import "./assets/styling/palette.sass"
@import "./assets/styling/themes.sass"
@import "./assets/styling/general.sass"
</style>
