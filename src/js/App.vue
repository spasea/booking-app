<template>
	<div id="app">
		<header>
			<header-component></header-component>
		</header>

		<main class="main">
			<router-view></router-view>
		</main>

		<footer class="footer">
			<footer-component></footer-component>
		</footer>
	</div>
</template>

<script>

	require('./models/bootstrap');

	import router from './models/routes'
	import HeaderComponent from './views/layout-parts/HeaderComponent.vue'
	import FooterComponent from './views/layout-parts/FooterComponent.vue'

	export default {
		data() {
			return {

			}
		},
		methods: {
			fillId(arr, count = 0) {
				if (arr.length > count) {
					arr[count]['id'] = ++count;
					return this.fillId(arr, count);
				}
				return arr;
			}
		},
		mounted() {
			if (! ls.get('categories', this)) {
			    ls.set('categories', this.fillId([
					{
						title: 'Comedy',
					},
					{
						title: 'Horror'
					},
					{
						title: 'Adventure'
					}
				]), this);
			}
		},
		router,
		components: {
			HeaderComponent,
			FooterComponent
		}
	}
</script>