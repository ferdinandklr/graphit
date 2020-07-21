<template>
  <div class="window-border"></div>
</template>

<script>
export default {
  name: 'WindowBorder'
}
</script>

<style lang="sass">
.window-border
  width: 100%
  height: 100%
  position: absolute
  top: 0
  left: 0
  z-index: 100
  pointer-events: none
  border: solid 1px var(--window-border-color)
</style>
