<template>
	<div class="container">
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
						<input :class="{
							'input': true,
							'is-danger': errors.has('title')
						}" type="text" placeholder="Film title" name="title" v-model="filmFields.title"
							   v-validate="'required|alpha'"
						>
						<p class="help is-danger" v-if="errors.has('title')">This filed is required</p>
					</div>
				</div>
				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea :class="{
							'textarea': true,
							'is-danger': errors.has('description')
						}" placeholder="Film description" v-model="filmFields.description"
								  name="description"
								  v-validate="'required'"
						></textarea>
						<p class="help is-danger" v-if="errors.has('description')">This filed is required</p>
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
								<input class="file-input" type="file" multiple
									@change="saveImage"
								   	v-validate="'required|image'"
								   	name="logo"
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
							<p class="help is-danger" v-if="errors.has('logo')">This filed is required</p>
						</div>
					</div>
				</div>
				<div class="field">
					<img :src="image"
						 v-for="image in logo"
						 class="film-preview"
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
						<date-picker :date="date" :option="settings.option"></date-picker>
					</div>
				</div>
				<div class="field">
					<label class="label">Starting time</label>
					<div class="control">
						<vue-timepicker v-model="time" hide-clear-button></vue-timepicker>
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
					<label class="label">Film price (UAH)</label>
					<div class="control">
						<input type="text" :class="{
							'input mask': true,
							'is-danger': errors.has('price')
						}" v-model="filmFields.price"
							   name="price"
							   data-inputmask="'alias': 'numeric', 'groupSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false, 'placeholder': '0'"
							   v-validate="'required'"
						>
						<p class="help is-danger" v-if="errors.has('price')">This filed is required</p>
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
	import Inputmask from "inputmask"

	const date = new Date();

	export default {
		data() {
			return {
				title: 'AddFilm',
				filmFields: {
					title: '',
					description: '',
					price: ''
				},
				date: {
					time: `${this.format(date.getDate())}-${this.format(date.getMonth() + 1)}-${this.format(date.getFullYear())}`
				},
				logo: [],
				fileNames: ['empty...'],
				time: {
					HH: this.format(date.getHours()),
					mm: this.format(date.getMinutes())
				},
				genre: '',
				duration: 80,
				photosNumber: 0,
				settings,
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
				this.$validator.validateAll().then(result => {
					if (result) {
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
								logo: this.logo,
								price: this.filmFields.price
							}
						], this);
						for (let field in this.filmFields) {
							this.filmFields[field] = '';
						}
						this.logo = [];
						this.fileNames = ['empty...'];
						this.photosNumber = 0;
						this.errors.clear();
					}
				});
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
			format(date) {
				return date < 10 ? `0${date}` : date;
			}
		},
		mounted() {
			this.genre = this.genres[0]['id'];
			Inputmask().mask(document.querySelectorAll(".mask"));
		},
		components: {
			DatePicker,
			VueTimepicker,
			vueSlider,
			VeeValidate
		}
	}
</script>