import VueRouter from 'vue-router';
import routes from './RouteLinks';

export default new VueRouter({
	routes,

	linkActiveClass: 'is-active'
})