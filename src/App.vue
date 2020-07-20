<!--
  This file controls the entire app
    -> global styling (palette, themes, ...)
    -> display the right view
-->

<template>
  <div id="app" :class="{ 'theme-light': theme==='light', 'theme-dark': theme==='dark' }">

    <!-- add a windows title bar -->
    <titlebar />
  </div>
</template>

<script>
// import store
import { theme } from '@/stores/AppState'

// improt components
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
</style>
