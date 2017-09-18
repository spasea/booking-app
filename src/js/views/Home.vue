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
					to="/order-ticket"
					exact
					@click.native="film = item.id"
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
	import film from '../store/computed/film'

	export default {
		data() {
			return {
				filmsList: ls.get('films', this)
			}
		},
		computed: {
			film,
		}
	}
</script>