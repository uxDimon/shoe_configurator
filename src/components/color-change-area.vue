<template>
  <div>
    <button
      v-for="(area, name) of modelChangeArea"
      :key="name"
      @click="showChoiceManu(name, area)"
    >{{name}}</button>

    <app-color-choice-manu></app-color-choice-manu>
  </div>
</template>

<script>
import ColorChoiceManu from "./color-choice-manu.vue";

export default {
  methods: {
    showChoiceManu(name, area) {
      this.$store.commit("addData", { name, area });
    }
  },
  computed: {
    modelChangeArea() {
      return this.$store.state.models.shoeModel0;
    }
  },
  components: {
    "app-color-choice-manu": ColorChoiceManu
  }
};
</script>