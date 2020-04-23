export default {
	state: {
		selectedOptions: {},
		default: {
			name: "Стандарт",
			hex: "#fff",
			// positionColor: {},
		},
	},
	mutations: {
		choiceColor(state, payload) {
			state.selectedOptions[payload.areaKey] = payload.color;
		},
	},
};
