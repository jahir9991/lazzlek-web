<script>
	import Hero from './../Components/heroSection.svelte'
	import Navbar from './../Components/navbar.svelte'
	import Category from '$src/Components/category.svelte';
	import Activities from '$src/Components/activities.svelte';
	import Cloud from '$src/Components/cloud.svelte';
	import LatestClouds from '$src/Components/latestClouds.svelte';
	import Stories from '$src/Components/stories.svelte';
	import Footer from '$src/Components/footer.svelte';
</script>
<Navbar/>
<Hero/>
<Category/>
<Activities/>
<Cloud/>
<LatestClouds/>
<Stories/>
<Footer/>
<!-- <h1>Shariful islam</h1>
<h1 class="my">
	<span>my</span>
</h1>
<h1 class="u">
	<span>you </span>
</h1>

<style lang="postcss">

	.my {
		span {
			@apply bg-black;
		}
	}
	.u {
		span {
			@apply bg-red-50;

		}

        p{
            
        }
	}
</style>
 -->