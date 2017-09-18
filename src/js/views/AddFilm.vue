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
					<label class="label">Starting date</label>
					<div class="control">
						<date-picker :date="date" :option="option"></date-picker>
					</div>
				</div>
				<div class="field">
					<label class="label">Starting time</label>
					<div class="control">
						<vue-timepicker v-model="time"></vue-timepicker>
					</div>
				</div>
				<div class="field">
					<label class="label">Duration time</label>
					<div class="control">
						<vue-slider v-model="duration" :max="150"
									formatter="{value} min"
						></vue-slider>
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
	import DatePicker from 'vue-datepicker'
	import settings from '../models/datePickerConfig'

	import vueSlider from 'vue-slider-component'

	export default {
		data() {
			return {
				...{
					title: 'AddFilm',
					filmFields: {
						title: '',
						description: '',
					},
					date: {
						time: ''
					},
					time: {
						HH: '',
						mm: ''
					},
					genre: '',
					duration: 80
				},
				...settings
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
						categoryId: this.genre,
						title: this.filmFields.title,
						description: this.filmFields.description,
						date: this.date.time,
						time: `${this.time.HH}:${this.time.mm}`,
						duration: this.duration
					}
				], this);
				for (let field in this.filmFields) {
					this.filmFields[field] = '';
				}
			}
		},
		mounted() {
			this.genre = this.genres[0]['id'];
		},
		components: {
			DatePicker,
			VueTimepicker,
			vueSlider
		}
	}
</script>