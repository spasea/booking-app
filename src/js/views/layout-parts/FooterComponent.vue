<template>
	<div class="container">
		<div class="content has-text-centered">
			<router-link
				tag="button" key="Add Film"
				class="button is-primary"
				to="/add-film"
				exact
			>Add film</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>