const state = {
	filmId: 1
};

const mutations = {
	changeFilm: (state, id) => {
		state.filmId = id;
	},
};

const getters = {
	filmId() {
		return state.filmId;
	},
};

const actions = {
	filmId({commit}, id) {
		commit('changeFilm', id);
	},
};

export default {
	state,
	mutations,
	getters,
	actions
}