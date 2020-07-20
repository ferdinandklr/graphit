<template>
  <div id="app" class="theme-light">
    <titlebar />
  </div>
</template>

<script>
import Titlebar from '@/components/Titlebar'

export default {
  name: 'App',
  components: {
    titlebar: Titlebar
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
