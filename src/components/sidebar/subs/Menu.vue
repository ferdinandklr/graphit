<!--
  This file render all of the links to change view
 -->

<template>
  <div class="menu">
    <div class="menusub_view" :class="{ 'active': views.active===view.id , 'enable': view.enable }" v-for="view in views.views" :key="view.id">{{ view.name }}</div>
  </div>
</template>

<script>
// import the store
import { views } from '@/stores/AppState'

export default {
  name: 'Menu',
  setup() {
    return { views }
  }
}
</script>

<style lang="sass">
.menu
  display: flex
  width: 100%
  height: 100%
  flex-direction: column
  justify-content: center
  align-items: center

  .menusub_view
    width: calc( 100% - 20px)
    height: 38px
    margin-bottom: 10px
    display: flex
    justify-content: center
    align-items: center
    border-radius: var(--default-border-radius)
    text-transform: uppercase
    font-size: 15px
    letter-spacing: 3px
    word-spacing: 4px
    &:last-child
      margin-bottom: 0

    &.enable:not(.active):hover
      background-color: var(--less-highlight-color)
      cursor: pointer

    &.active
      background-color: var(--highlight-color)

    &:not(.enable)
      color: var(--disable-color)
</style>
