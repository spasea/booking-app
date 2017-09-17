<template>
	<div>
		<header>
		</header>

		<main class="main">
			<router-view></router-view>
		</main>

		<footer>
		</footer>
	</div>
</template>

<script>

	require('./models/bootstrap');

	import router from './models/routes';

	export default {
		data() {
			return {

			}
		},
		router,
	}
</script>