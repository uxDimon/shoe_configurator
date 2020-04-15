<template>
  <div>
    <com-area v-for="(area, name) of getModel" :key="area.id" :name="name"></com-area>
  </div>
</template>

<script>
import __area from "./custom-object__area.vue";

export default {
  computed: {
    getModel() {
      return this.$store.state.models.shoeModel0;
    }
  },
  components: {
    "com-area": __area
  },
  created() {
    this.$store.commit("addAreasObject");
  }
};
</script>