<template>
  <div class="h-splitter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HorizontalSplitter'
}
</script>

<style lang="sass">
.h-splitter
  display: flex
  flex-direction: row
  width: 100%
  height: 100%
</style>
