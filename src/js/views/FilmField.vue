<template>
	<article class="message is-dark">
		<div class="message-header is-capitalized">
			<p>{{ title }}</p>
		</div>
		<div class="message-body">
			{{ text }}
		</div>
	</article>
</template>

<script>
	export default {
		props: [
			'title',
			'text'
		]
	}
</script>