const state = {
	pageTitle: 'Home'
};

const mutations = {
	changeTitle: (state, title) => {
		state.pageTitle = title;
	},
};

const getters = {
	pageTitle() {
		return state.pageTitle;
	},
};

const actions = {
	pageTitle({commit}, title) {
		commit('changeTitle', title);
		document.title = title;
	},
};

export default {
	state,
	mutations,
	getters,
	actions
}