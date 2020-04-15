<template>
  <div class="color-choice-manu" v-if="getData.show">
    <h3>{{getData.name}}</h3>
    <button @click="hideChoiceManu">Назад</button>
    <div
      class="testC"
      v-for="(color, name) of getData.area"
      :key="name.index"
      :style="{backgroundColor: color}"
      @click="giveColorCustomObject(getData.name, color)"
    >{{name}} {{color}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    hideChoiceManu() {
      this.$store.commit("hideChoiceManu");
    },
    giveColorCustomObject(name, color) {
      this.$store.commit("giveColorCustomObject", { name, color });
    }
  },
  computed: {
    getData() {
      return this.$store.state.colorChoiceManu;
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