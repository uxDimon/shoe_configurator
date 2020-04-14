import Vue from "vue";
import Vuex from "vuex";

import models from "./models.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		startMesague: "Приветик модуль"
	},
	modules: {
		models
	}
});
