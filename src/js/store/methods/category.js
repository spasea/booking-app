const state = {
	categoryId: 0
};

const mutations = {
	changeCategory: (state, id) => {
		state.categoryId = id;
	},
};

const getters = {
	categoryId() {
		return state.categoryId;
	},
};

const actions = {
	categoryId({commit}, id) {
		commit('changeCategory', id);
	},
};

export default {
	state,
	mutations,
	getters,
	actions
}