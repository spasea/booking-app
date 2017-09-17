let routes = [
	{
		name: 'Home',
		path: '/',
		component: view('Home'),
	},
	{
		name: 'AddFilm',
		path: '/add-film',
		component: view('AddFilm'),
	}
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view(name) {
	return function(resolve) {
		System.import(`../views/${name}.vue`).then(mod => {
			resolve(mod)
		})
	}
}
export default routes;