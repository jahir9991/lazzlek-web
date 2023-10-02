<script>
	let a = 10;

	const changeValue = () => {
		a++;
	};

	const data = [
		{ name: 'a', age: 12 },
		{ name: 'b34', age: 1234 },
		{ name: '4a', age: 132 },
		{ name: 'a4', age: 312 },
		{ name: 'a3', age: 152 }
	];
</script>

<h1>
	about page {a}
	<button on:click={changeValue}> click </button>

	{#if a == 12}
		<p>its done</p>
	{:else}
		<p>not yet</p>
	{/if}

	{#each data as item}
		<p>
			<span>{item.name}</span>
			<span>{item.age}</span>
		</p>
	{/each}
</h1>
