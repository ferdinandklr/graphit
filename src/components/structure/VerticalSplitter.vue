<template>
  <div class="v-splitter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VerticalSplitter'
}
</script>

<style lang="sass">
.v-splitter
  display: flex
  flex-direction: row
  width: 100%
  height: 100%
</style>
