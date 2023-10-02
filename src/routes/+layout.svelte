<script>
	import '../app.css';
</script>

<div id="theme" class="">
	<div id="body">
		<slot />
	</div>
</div>

<style lang="postcss">
	#body {
		@apply dark:bg-[--color-dark] bg-light;
	}
</style>
