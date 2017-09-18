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
					<label class="label">Logo</label>
					<div class="control">
						<div :class="{
							file: true,
							'is-warning': isLoading && photosNumber
						}">
							<label class="file-label">
								<input class="file-input" type="file" multiple name="Image"
									@change="saveImage"
								>
								<span class="file-cta"
									@drop="drop"
									@dragover="dragover"
									@dragleave="dragleave"
								>
									<span class="file-icon">
										<i class="fa fa-upload"></i>
									</span>
									<span class="file-label" v-if="! (isLoading && photosNumber)">
										Drag'n'drop file here or choose it
									</span>
									<span class="file-label" v-if="isLoading && photosNumber">
										Loading...
									</span>
								</span>
								<span class="file-name">
									{{ fileName }}
								</span>
							</label>
						</div>
					</div>
				</div>
				<div class="field">
					<img :src="image" style="width: 100px; height: 100px; object-fit: cover"
						 v-for="image in logo"
					>
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
					logo: [],
					fileNames: [],
					time: {
						HH: '',
						mm: ''
					},
					genre: '',
					duration: 80,
					photosNumber: 0
				},
				...settings
			}
		},
		computed: {
			genres() {
				return ls.get('categories', this);
			},
			fileName() {
				let name = '';
				this.fileNames.forEach(el => {
					name += `${el}, `;
				});
				return name.slice(0, name.length - 2);
			},
			isLoading() {
				return this.photosNumber !== this.logo.length;
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
						duration: this.duration,
						logo: this.logo
					}
				], this);
				for (let field in this.filmFields) {
					this.filmFields[field] = '';
				}
			},
			preventEvents(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			drop(e) {
				this.preventEvents(e);
				this.saveImage(e);
			},
			dragover(e) {
				this.preventEvents(e);
			},
			dragleave(e) {
				this.preventEvents(e);
			},
			saveImage(e) {
				const files = e.target.files || e.dataTransfer.files;
				if (! files.length) return;
				this.logo = [];
				this.fileNames = [];
				this.photosNumber = files.length;
				for (let file in files) {
					let el = files[file];
					if (el.type === 'image/jpeg' || el.type === 'image/png') {
						this.createImage(el);
					}
				}
			},
			createImage(file) {
				const reader = new FileReader();

				reader.onload = (e) => {
					this.logo.push(e.target.result);
					this.fileNames.push(file.name)
				};
				reader.readAsDataURL(file);
			},
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