<!--
  This file controls the titlebar look (only on windows)
    -> interactive os buttons
    -> drag zone
-->

<template>
  <div class="titlebar">
    <div class="minimize" @click="minimizeWindow"></div>
    <div class="maximize" @click="maximizeWindow"></div>
    <div class="close" @click="closeWindow"></div>
  </div>
</template>

<script>
export default {
  name: 'Titlebar',
  setup() {
    function minimizeWindow() {
      ipcRenderer.send('minimize-window') // eslint-disable-line
    }

    function maximizeWindow() {
      ipcRenderer.send('maximize-window') // eslint-disable-line
    }

    function closeWindow() {
      ipcRenderer.send('close-window')  // eslint-disable-line
    }

    return { minimizeWindow, maximizeWindow, closeWindow }
  }
}
</script>

<style lang="sass">
.titlebar
  width: 100%
  height: 30px
  position: absolute
  top: 0
  left: 0
  z-index: 10
  display: flex
  flex-direction: row
  align-items: center
  justify-content: flex-end
  -webkit-app-region: drag

  .minimize, .maximize, .close
    width: 45px
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    position: relative
    -webkit-app-region: no-drag
    transition: background-color var(--faster-transition-speed) var(--nice-transition-curve)
    &::after, &::before
      transition: background-color var(--faster-transition-speed) var(--nice-transition-curve), border-color var(--faster-transition-speed) var(--nice-transition-curve)
    &:hover
      background-color: var(--less-highlight-color)

  .minimize
    &::after
      content: ""
      width: 10px
      height: 1px
      background-color: var(--window-icons-color)

  .maximize
    &::after
      content: ""
      width: 10px
      height: 10px
      border: 1px solid var(--window-icons-color)

  .close
    &::after, &::before
      content: ""
      width: 18px
      height: 1px
      background-color: var(--window-icons-color)
      position: absolute
      transform: rotate(135deg)
      border-radius: 10px
    &::before
      transform: rotate(45deg)
    &:hover
      background-color: var(--red)
      &::after, &::before
        height: 2px
        background-color: var(--window-icons-color-hover)
</style>
