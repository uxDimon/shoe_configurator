<template>
  <div v-show="showManu">
    <button @click="cleanData">Назад</button>
    <button
      v-for="(color, index) in areaData"
      :key="index"
      @click="choiceColor(color, areaKey)"
    >{{color.name}}</button>
  </div>
</template>

<script>
export default {
  methods: {
    cleanData() {
      this.$store.commit("hideManu");
    },
    choiceColor(color, areaKey) {
      this.$store.commit("choiceColor", { color, areaKey });
    }
  },
  computed: {
    areaData() {
      return this.$store.state.colorChoiceManu.areaData;
    },
    showManu() {
      return this.$store.state.colorChoiceManu.showManu;
    },
    areaKey() {
      return this.$store.state.colorChoiceManu.areaKey;
    }
  }
};
</script>