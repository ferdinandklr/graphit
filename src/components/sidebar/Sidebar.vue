<!--
  This file controls how to render the sidebar
    -> show the app's name
    -> display the right subs
-->

<template>
  <div class="sidebar">
    <!-- show the app's name  -->
    <div class="title">graphit</div>
    <!-- show the right subs -->
    <sub-menu v-if="sidebar_subs === SIDEBAR_SUBS.MENU" />
  </div>
</template>

<script>
// import store data
import { sidebar_subs } from '@/stores/AppState'
import { SIDEBAR_SUBS } from '@/constants'

// import components
import Menu from '@/components/sidebar/subs/Menu'

export default {
  name: 'Sidebar',
  components: {
    'sub-menu': Menu
  },
  setup() {
    return { SIDEBAR_SUBS, sidebar_subs }
  }
}
</script>

<style lang="sass">
.sidebar
  width: 250px
  height: 100vh
  background-color: var(--panel-color)
  position: relative
  flex-grow: 0

  .title
    font-family: SFProDisplay
    text-transform: uppercase
    font-size: 25px
    letter-spacing: 3px
    font-weight: 700
    width: 100%
    height: 70px
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    top: 0
    left: 0
</style>
