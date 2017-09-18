export default {
	get() {
		return store.getters.categoryId;
	},
	set(id) {
		store.dispatch('categoryId', id);
	}
};