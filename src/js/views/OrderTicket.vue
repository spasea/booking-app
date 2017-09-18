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
				<article class="message is-dark" v-for="(item, key) in filmSelected"
					v-if="fields.includes(key)"
				>
					<div class="message-header is-capitalized">
						<p>{{ key }}</p>
					</div>
					<div class="message-body">
						{{ item }}
					</div>
				</article>
			</div>
		</div>
		<div class="content">
			<blockquote>Buy ticket</blockquote>
		</div>
	</div>
</template>

<script>
	import film from '../store/computed/film'

	export default {
		data() {
			return {
				fields: [
					'title',
					'description',
					'date',
					'time',
					'duration',
					'price'
				]
			}
		},
		computed: {
			film,
			filmSelected() {
				return ls.get('films', this).filter(item => {
					return item.id === this.film;
				})[0];
			}
		},
		created() {
		}
	}
</script>