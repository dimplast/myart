<script>
	import { onMount } from "svelte";

	let Carousel;
	let carousel; // for calling methods of carousel instance

	onMount(async () => {
   		const module = await import("svelte-carousel");
    	Carousel = module.default;
  	});

    const images = [
		{path: '/img/TheDevilYouKnow.png', id: 'image1',title:'The Devil YouKnow'},
		{path: '/img/TheJudge.png', id: 'image2', title:"The Judge"},
		{path: '/img/ThreeOfSwords.png', id: 'image3', title:'Three Of Swords'},
		{path: '/img/Oblivion.png', id: 'image4', title: 'Oblivion'},
		{path: '/img/ArtIsNotMeantToBePerfect.png', id: 'image5', title:'Art Is NotMeant To BePerfect'},
		// {path: 'images/image6.jpg', id: 'image6'},
	]
</script>


<div class="flex flex-col bg-black h-screen w-screen items-center">
	<div class="font-caramel text-white text-9xl">Vik P</div>
	<svelte:component this={Carousel} bind:this={carousel} autoplay=true>
		{#each images as image (image.id)}
			<div class="flex flex-col justify-center items-center">
				<img src={image.path} alt="">
				<div class="text-white font-petit text-5xl my-8">{image.title}</div>
			</div>
		{/each}
	</svelte:component>

 </div>


<style>

</style>
