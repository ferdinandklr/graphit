<!--
  This file controls the entire app
    -> global styling (palette, themes, ...)
    -> display the right view
-->

<template>
  <div id="app" :class="{ 'theme-light': theme==='light', 'theme-dark': theme==='dark' }">

    <!-- code related to windows -->
    <titlebar />
    <div class="windowBorder"></div>

  </div>
</template>

<script>
// import store
import { theme } from '@/stores/AppState'

// import components
import Titlebar from '@/components/Titlebar'

export default {
  name: 'App',
  components: {
    titlebar: Titlebar
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

#app
  .windowBorder
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 100
    pointer-events: none
    border: solid 1px var(--window-border-color)
</style>
