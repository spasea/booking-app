<template>
	<div class="container">
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-start">
				<router-link
					tag="a" :key="0"
					to="/" :class="{
						'navbar-item': true,
						'is-selected': ! category
					}"
					exact
					@click.native="category = 0"
				>All categories</router-link>
				<router-link
					v-for="(item, index) in categories"
					tag="a" :key="item.id"
					to="/" :class="{
						'navbar-item': true,
						'is-selected': item.id === category
					}"
					exact
					@click.native="category = item.id"
				>{{ item.title }}</router-link>
			</div>
			<div class="navbar-end">
				<input class="input" type="text" placeholder="Search film"
					   v-model="searchString"
					@keyup="searchFilm = searchString"
				>
			</div>
		</nav>
	</div>
</template>

<script>
	import category from '../../store/computed/category'
	import searchFilm from '../../store/computed/searchFilm'

	export default {
		data() {
			return {
				searchString: ''
			}
		},
		computed: {
			categories() {
				return ls.get('categories', this);
			},
			category,
			searchFilm
		}
	}
</script>