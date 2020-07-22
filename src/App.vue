<!--
  This file controls the entire app
    -> global styling (palette, themes, ...)
    -> display the right view
-->

<template>
  <div id="app" :class="{ 'theme-light': theme===THEMES.LIGHT, 'theme-dark': theme===THEMES.DARK }">

    <!-- code related to windows -->
    <titlebar />
    <window-border />

    <!-- spit the window -->
    <v-splitter>
      <!-- show the sidebar -->
      <sidebar />
      <!-- show the right view -->
      <tables v-if="views.active===VIEWS.TABLES"/>
      <plot-2d v-if="views.active===VIEWS.PLOT2D"/>

    </v-splitter>

  </div>
</template>

<script>
// import constants
import { THEMES, VIEWS } from '@/constants.js'

// import store
import { theme, views } from '@/stores/AppState'

// import components
import Titlebar from '@/components/Titlebar'
import WindowBorder from '@/components/WindowBorder'
// import HorizontalSplitter from '@/components/structure/HorizontalSplitter'
import VerticalSplitter from '@/components/structure/VerticalSplitter'
import Sidebar from '@/components/sidebar/Sidebar'

// import views
import Tables from '@/views/Tables'
import Plot2D from '@/views/Plot2D'

export default {
  name: 'App',
  components: {
    titlebar: Titlebar,
    'window-border': WindowBorder,
    // 'h-splitter': HorizontalSplitter,
    'v-splitter': VerticalSplitter,
    sidebar: Sidebar,
    tables: Tables,
    'plot-2d': Plot2D
  },
  setup() {
    return { THEMES, theme, VIEWS, views }
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
