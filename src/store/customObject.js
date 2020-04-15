export default {
	state: {
		areas: {},
	},
	mutations: {
		giveColorCustomObject(state, payload) {
			state.areas[payload.name] = payload.color;
		},
	},
};
