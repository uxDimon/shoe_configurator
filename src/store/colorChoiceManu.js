export default {
	state: {
		name: "",
		area: ""
	},
	mutations: {
		addData(state, payload) {
			state.name = payload.name;
			state.area = payload.area;
		},
		deleteData(state) {
			state.name = "";
			state.area = "";
		}
	}
};
