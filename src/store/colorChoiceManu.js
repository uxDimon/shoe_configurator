export default {
	state: {
		areaData: "",
		areaKey: "",
		showManu: false,
	},
	mutations: {
		addData(state, payload) {
			state.areaData = payload.area;
			state.areaKey = payload.key;
			state.showManu = true;
		},
		hideManu(state) {
			state.showManu = false;
		},
	},
};
