<script context="module">
    const allImages = import.meta.glob("/src/images/*.png")

    let body = [];
    for (let path in allImages){
        body.push(
            allImages[path]().then(({metadata}) => {
                return {path, metadata}
            })
        );
    }

    export const load = async () =>  {
        const images = await Promise.all(body);
        
        console.log(images)
        return {
            props: {
                images
            }
        }
    }

</script>



<script>
    import { onMount } from "svelte";

	let Carousel;
	let carousel; // for calling methods of carousel instance
	onMount(async () => {
   		const module = await import("svelte-carousel");
    	Carousel = module.default;
  	});

    export let images

</script>


<div class="flex flex-col bg-black h-screen w-screen items-center">
	<div class="font-caramel text-white text-9xl">Vik P</div>
	<svelte:component this={Carousel} bind:this={carousel} autoplay=true>
		{#each images as image}
			<div class="flex flex-col justify-center items-center">
				<img src={image.path} alt="">
				<div class="text-white font-petit text-5xl my-8">{image.path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.')}</div>
			</div>
		{/each}
	</svelte:component>

 </div>
