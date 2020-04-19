<template>
  <div>
    <button v-for="color of modelChangeArea.body.colors" :key="color.id">{{color.name}}</button>

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
      return this.$store.getters.getActiveCustoObject;
    }
  },
  components: {
    "app-color-choice-manu": ColorChoiceManu
  }
};
</script>