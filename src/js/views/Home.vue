<template>
	<div>{{ title }}
		<router-link
			tag="a" key="Add Film"
			to="/add-film"
			exact
		>add film</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Home 123'
			}
		}
	}
</script>