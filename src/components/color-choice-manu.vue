<template>
  <div class="color-choice-manu" v-if="getData.show">
    <h3 class="color-choice-manu__heading">{{getData.name}}</h3>
    <button @click="hideChoiceManu">
      <icon-arrow></icon-arrow>Назад
    </button>
    <button
      class="testC"
      v-for="(color, name) of getData.area"
      :key="name.index"
      :style="{backgroundColor: color}"
      @click="giveColorCustomObject(getData.name, color)"
    >{{name}}</button>
  </div>
</template>

<script>
import iconArrow from "./icons/icon__arrow.vue";

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
  },
  components: {
    iconArrow
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