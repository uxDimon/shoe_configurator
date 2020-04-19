<template>
  <div class="custom-object__area">
    <div :style="{backgroundColor: getChoiseColor[name]}"></div>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    getChoiseColor() {
      return this.$store.state.customObject.areas;
    }
  }
};
</script>

<style lang="scss">
.custom-object__area {
  display: flex;
  margin-bottom: 20px;

  div {
    width: 100px;
    height: 100px;
  }
}
</style>