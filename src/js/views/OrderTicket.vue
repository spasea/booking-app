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
		<div class="columns is-wrapped is-50" v-for="row in rows">
			<div class="column is-2">Row {{ row }}</div>
			<div class="column center-content seat" v-for="column in columns"
			>
				<span :class="{
					'center-content': true,
					'disabled': ! isFree(row, column),
					'selected': isSelected(row, column)
				}"
					  @click="select(row, column)"
				>{{ column }}</span>
			</div>
		</div>
		<button class="button is-primary" @click="book">Buy</button>
	</div>
</template>

<script>
	import FilmField from './layout-parts/FilmField'

	export default {
		data() {
			return {
				rows: this.fill(5),
				columns: this.fill(8),
				selected: []
			}
		},
		props: {
			filmId: {
				required: false,
				default: 1,
			}
		},
		computed: {
			filmSelected() {
				return ls.get('films', this).filter(item => {
					return item.id === +this.filmId;
				})[0];
			},
			genre() {
				return ls.get('categories', this).filter(item => {
					return item.id === this.filmSelected.categoryId;
				})[0];
			}
		},
		methods: {
			fill(limit) {
				let arr = [];
				for (let i = 1; i <= limit; i++) {
					arr.push(i);
				}
				return arr;
			},
			isFree(row, column) {
				if (! ls.get(['sold', +this.filmId], this)) return true;

				return ! this.checkRowColumn(ls.get(['sold', +this.filmId], this), row, column);
			},
			isSelected(row, column) {
				return this.checkRowColumn(this.selected, row, column);
			},
			checkRowColumn(arr, row, column) {
				return arr.filter(value => value.row === row && value.column === column).length;
			},
			select(row, column) {
				if (this.isFree(row, column) && !this.isSelected(row, column)) {
					this.selected.push({row, column});
					return;
				}
				if (this.isSelected(row, column)) {
				    let index = this.selected.findIndex(element => element.row === row && element.column === column);
					this.selected.splice(index, 1);
				}
			},
			book() {
				if (this.selected.length) {
					let sold = ls.get('sold', this);
					let prevContent = ls.get('sold', this)[+this.filmId] ? ls.get('sold', this)[+this.filmId] : [];
					sold[+this.filmId] = [...prevContent, ...this.selected];
					ls.set('sold', sold, this, false);
				    alert('Tickets were bought successfully');
				    this.selected = [];
				    return;
				}
				alert('There aren\'t any seats selected or there aren\'t any seats available');
			}
		},
		components: {
			FilmField
		}
	}
</script>