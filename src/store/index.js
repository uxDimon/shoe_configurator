import Vue from "vue";
import Vuex from "vuex";

import models from "./models";
import colorChoiceManu from "./colorChoiceManu";
import customObject from "./customObject";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		startMesague: "Приветик модуль",

		activeCustoObject: "shoeModel0",
		activeViewingAngles: "left",
	},
	modules: {
		models,
		colorChoiceManu,
		customObject,
	},
	mutations: {
		choiceActiveViewingAngles(state, payload) {
			state.activeViewingAngles = payload;
		},
	},
	getters: {
		getActiveCustoObject(state) {
			return state.models[state.activeCustoObject];
		},
		getActiveViewingAngles(state, getters) {
			return getters.getActiveCustoObject.viewingAngles[state.activeViewingAngles];
		},
	},
});
