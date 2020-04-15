import Vue from "vue";
import Vuex from "vuex";

import models from "./models";
import colorChoiceManu from "./colorChoiceManu";
import customObject from "./customObject";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		startMesague: "Приветик модуль",
	},
	modules: {
		models,
		colorChoiceManu,
		customObject,
	},
	mutations: {
		addAreasObject(state) {
			for (let area in state.models.shoeModel0) {
				Vue.set(state.customObject.areas, area, "#fff");
			}
		},
	},
});
