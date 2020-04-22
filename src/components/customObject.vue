<template>
  <div class="customObject">
    <div class="customObject_area" v-for="(item, index) of activeViewingAngles" :key="index">
      <div
        class="customObject_areaPosition"
        v-for="(position, indexP) of item.position"
        :key="indexP"
        :style="{
        backgroundImage: 'url('+item.url+')',
        backgroundPosition: position,
      }"
      >{{selectColor}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  computed: {
    activeViewingAngles() {
      return this.$store.getters.getActiveViewingAngles;
    },
    selectColor(index) {
      return this.$store.getters.selectColor(index);
    }
  }
};
</script>

<style lang="scss">
.customObject {
  position: relative;
}
.customObject_area {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 900px;
}

.customObject_areaPosition {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 900px;
}
</style>