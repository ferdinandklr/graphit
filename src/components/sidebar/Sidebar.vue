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
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="sass">
.sidebar
  width: 250px
  height: 100vh
  background-color: var(--panel-color)

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
</style>
