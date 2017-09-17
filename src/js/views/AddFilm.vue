<template>
	<div>
		<div class="columns">
			<section class="column is-half is-offset-one-quarter">
				{{ title }}
			</section>
		</div>
		<div class="columns">
			<section class="column is-half is-offset-one-quarter">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input" v-model="filmTitle">
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button class="button is-primary" @click="addFilm">Submit</button>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'AddFilm',
				filmTitle: ''
			}
		},
		methods: {
			addFilm() {
				ls.set('comedy', [
					{
						title: this.filmTitle
					}
				], this);
				this.filmTitle = '';
			}
		}
	}
</script>