<template>
  <div class="change-theme-button" :class="{ 'checked': theme===THEMES.DARK }" @click="switchTheme"></div>
</template>

<script>
// import the store
import { THEMES } from '@/constants'
import { theme, switchTheme } from '@/stores/AppState'

export default {
  name: 'ChangeThemeButton',
  setup() {
    return { THEMES, theme, switchTheme }
  }
}
</script>

<style lang="sass">
.change-theme-button
  width: 40px
  height: 20px
  background-color: var(--change-theme-button-color)
  position: absolute
  bottom: 10px
  left: 10px
  border-radius: 100px
  &::after
    content: ""
    position: absolute
    width: 16px
    height: 16px
    border-radius: 100px
    background-color: var(--panel-color)
    left: 2px
    top: 2px
  &.checked::after
    left: auto
    right: 1px
    top: 1px
    width: 18px
    height: 18px
  &:hover
    cursor: pointer

</style>
