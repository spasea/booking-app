const state = {
	search: ''
};

const mutations = {
	changeSearch: (state, string) => {
		state.search = string;
	},
};

const getters = {
	search() {
		return state.search;
	},
};

const actions = {
	search({commit}, string) {
		commit('changeSearch', string);
	},
};

export default {
	state,
	mutations,
	getters,
	actions
}