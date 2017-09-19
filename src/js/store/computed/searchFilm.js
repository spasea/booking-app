export default {
	get() {
		return store.getters.search;
	},
	set(string) {
		store.dispatch('search', string);
	}
};