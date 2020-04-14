<template>
  <div>
    <button
      v-for="(area, name) of modelChangeArea"
      :key="name"
      @click="showChoiceManu(area, name)"
    >{{name}}</button>

    <app-color-choice-manu :areaColor="choiceManuArea" :name="choiceManuName"></app-color-choice-manu>
  </div>
</template>

<script>
import ColorChoiceManu from "./color-choice-manu.vue";

export default {
  data() {
    return {
      choiceManuName: "",
      choiceManuArea: ""
    };
  },
  methods: {
    showChoiceManu(area, name) {
      return (this.choiceManuName = name), (this.choiceManuArea = area);
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