<template>
  <div id="app">
    <h1 class="startH">{{start}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    start() {
      return this.$store.state.startMesague;
    }
  }
};
</script>

<style lang="scss">
</style>
