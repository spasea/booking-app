<template>
	<div class="container">
		<div class="content">
			<blockquote>Description</blockquote>
		</div>
		<div class="columns">
			<div class="column is-4 center-content">
				<img :src="filmSelected.logo[0]" :alt="filmSelected.title" class="film-preview film-preview--large">
			</div>
			<div class="column is-7 is-offset-1">
				<film-field
					title="title"
					:text="filmSelected.title"
				></film-field>
				<film-field
					title="description"
					:text="filmSelected.description"
				></film-field>
				<film-field
					title="genre"
					:text="genre.title"
				></film-field>
				<film-field
					title="start time"
					:text="filmSelected.time"
				></film-field>
				<film-field
					title="duration"
					:text="`${filmSelected.duration} min`"
				></film-field>
				<film-field
					title="date of release"
					:text="filmSelected.date"
				></film-field>
				<film-field
					title="ticket price"
					:text="`${filmSelected.price} UAH`"
				></film-field>
			</div>
		</div>
		<div class="content">
			<blockquote>Buy ticket</blockquote>
		</div>
	</div>
</template>

<script>
	import film from '../store/computed/film'
	import FilmField from './FilmField'

	export default {
		data() {
			return {

			}
		},
		computed: {
			film,
			filmSelected() {
				return ls.get('films', this).filter(item => {
					return item.id === this.film;
				})[0];
			},
			genre() {
				return ls.get('categories', this).filter(item => {
					return item.id === this.filmSelected.categoryId;
				})[0];
			}
		},
		created() {
		},
		components: {
			FilmField
		}
	}
</script>