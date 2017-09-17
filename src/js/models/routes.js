import VueRouter from 'vue-router';
import routes from './RouteLinks';

export default new VueRouter({
	routes,
	mode: 'history',

	linkActiveClass: 'is-active'
})