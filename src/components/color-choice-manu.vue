<template>
  <div class="color-choice-manu" v-if="getData.name != ''">
    <h3>{{getData.name}}</h3>
    <button @click="deleteData">Назад</button>
    <div
      class="testC"
      v-for="(color, key) of getData.area"
      :key="key.index"
      :style="{backgroundColor: color}"
    >{{key}} {{color}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteData() {
      this.$store.commit("deleteData");
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