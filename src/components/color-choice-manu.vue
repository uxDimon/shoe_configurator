<template>
  <div class="color-choice-manu" v-if="name != ''">
    <h3>{{name}}</h3>
    <button @click="clearProps">Назад</button>
    <div
      class="testC"
      v-for="(value, key) of areaColor"
      :key="key.index"
      :style="{backgroundColor: value}"
    >{{key}} {{value}}</div>
  </div>
</template>

<script>
export default {
  props: ["areaColor", "name"],
  methods: {
    clearProps() {
      return (this.areaColor = ""), (this.name = "");
    }
  }
};
</script>

<style lang="scss">
.testC {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
}
</style>