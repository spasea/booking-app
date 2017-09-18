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
					<label class="label">Title</label>
					<div class="control">
						<input class="input" type="text" placeholder="Film title" v-model="filmFields.title">
					</div>
				</div>
				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea class="textarea" placeholder="Film description" v-model="filmFields.description"></textarea>
					</div>
				</div>
				<div class="field">
					<label class="label">Genre</label>
					<div class="control columns">
						<div class="column">
							<div class="select is-100">
								<select class="is-100" v-model="genre">
									<option
										v-for="genre in genres"
										:value="genre.id"
									>{{ genre.title }}</option>
								</select>
							</div>
						</div>
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
				filmFields: {
					title: '',
					description: '',
				},
				genre: this.genres[0]['id']
			}
		},
		computed: {
			genres() {
				return ls.get('categories', this);
			}
		},
		methods: {
			addFilm() {
				let id = ls.get('films', this) ? ++ls.get('films', this).length : 1;
				ls.set('films', [
					{
						id,
						categoryId: 1,
						title: this.filmFields.title,
						description: this.filmFields.description
					}
				], this);
				for (let field in this.filmFields) {
					this.filmFields[field] = '';
				}
			}
		}
	}
</script>