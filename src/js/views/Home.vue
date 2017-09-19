<template>
	<div class="container">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><a href="#">Movies</a></li>
			</ul>
		</nav>
		<div class="columns is-wrapped">
			<div class="column center-content is-3"
				 v-for="(item, index) in filmsFiltered"
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
				<button class="button is-primary" @click="deleteFilm(item.id)">Delete</button>
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
				filmsList: ls.get('films', this)
			}
		},
		computed: {
			category,
			searchFilm,
			filmsFiltered() {
				let filmsList = this.filmsList;
				filmsList = filmsList.filter(value => new RegExp(this.searchFilm, 'i').test(value.title));
				if (! this.category) return filmsList;

				return filmsList.filter(value => {
					return value.categoryId === this.category;
				})
			}
		},
		methods: {
			deleteFilm(id) {
				let sold = ls.get('sold', this);
				if (sold[id]) {
					delete sold[id];
					ls.set('sold', sold, this, false);
				}
				let films = ls.get('films', this);
				let index = films.findIndex(element => element.id === id);
				films.splice(index, 1);

				ls.set('films', films, this, false);
				this.filmsList = ls.get('films', this);
			}
		}
	}
</script>