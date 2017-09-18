const state = {
	filmId: 1,
	search: ''
};

const mutations = {
	changeFilm: (state, id) => {
		state.filmId = id;
	},
	changeSearch: (state, string) => {
		state.search = string;
	},
};

const getters = {
	filmId() {
		return state.filmId;
	},
	search() {
		return state.search;
	},
};

const actions = {
	filmId({commit}, id) {
		commit('changeFilm', id);
	},
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