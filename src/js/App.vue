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

	import './models/bootstrap'
	import router from './models/routes'
	import HeaderComponent from './views/layout-parts/HeaderComponent.vue'
	import FooterComponent from './views/layout-parts/FooterComponent.vue'

	export default {
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
			if (! ls.get('seats', this)) {
				ls.set('seats', {
					rows: 5,
					columns: 8
				}, this);
			}
			if (! ls.get('sold', this)) {
				ls.set('sold', {}, this);
			}
		},
		router,
		components: {
			HeaderComponent,
			FooterComponent
		}
	}
</script>