<template>
	<div id="app">
		<header>
			<header-component></header-component>
		</header>

		<main class="main">
			<router-view></router-view>
		</main>

		<footer>
			<footer-component></footer-component>
		</footer>
	</div>
</template>

<script>

	require('./models/bootstrap');

	import router from './models/routes';
	import HeaderComponent from './views/layout-parts/HeaderComponent.vue';
	import FooterComponent from './views/layout-parts/FooterComponent.vue';

	export default {
		data() {
			return {

			}
		},
		router,
		components: {
			HeaderComponent,
			FooterComponent
		}
	}
</script>