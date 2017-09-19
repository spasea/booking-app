<template>
	<div class="container">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><a href="#">Movies</a></li>
			</ul>
		</nav>
		<div class="columns is-wrapped">
			<div class="column center-content is-3"
				 v-for="(item, index) in filmsList"
			>
				<router-link
					tag="a" :key="index"
					:to="`/order-ticket/${item.id}`"
					exact
				>
					<img :src="item.logo[0]" alt="film.title"
						 class="film-preview film-preview--large"
					>
					<span class="label">{{ item.title }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import category from '../store/computed/category'
	import searchFilm from '../store/computed/searchFilm'

	export default {
		data() {
			return {

			}
		},
		computed: {
			category,
			searchFilm,
			filmsList() {
				let filmsList = ls.get('films', this);
				filmsList = filmsList.filter(value => new RegExp(this.searchFilm, 'i').test(value.title));
				if (! this.category) return filmsList;

				return filmsList.filter(value => {
					return value.categoryId === this.category;
				})
			}
		}
	}
</script>