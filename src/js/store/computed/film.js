export default {
	get() {
		return store.getters.filmId;
	},
	set(id) {
		store.dispatch('filmId', id);
	}
};