<template>
  <div>
    <div
      class="customObject_areaPosition"
      v-for="(position, indexP) of item.position"
      :key="indexP"
      :style="{
        backgroundImage: 'url(' + item.url + ')',
        backgroundPosition: position,
        maskImage: 'url(' + item.url + ')',
        maskPosition: position,
        backgroundColor: getColor[index].hex,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  computed: {
    getColor() {
      return this.$store.state.customObject.selectedOptions;
    }
  }
};
</script>

<style lang="scss">
// backgroundImage: 'url(' + item.url + ')',
// backgroundPosition: position,
// maskImage: 'url(' + item.url + ')',
// maskPosition: position,
// backgroundColor: getColor[index].hex,

.customObject_areaPosition {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 900px;
  background-blend-mode: multiply;
}
</style>