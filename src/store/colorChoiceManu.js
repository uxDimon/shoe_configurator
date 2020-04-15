export default {
	state: {
		name: "",
		area: "",
		show: false,
	},
	mutations: {
		addData(state, payload) {
			state.name = payload.name;
			state.area = payload.area;
			state.show = true;
		},
		deleteData(state) {
			state.show = false;
		},
	},
};