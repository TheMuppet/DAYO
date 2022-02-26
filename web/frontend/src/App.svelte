<script>
  import Home from "@/components/Home.svelte";
  import { fade } from "svelte/transition";

  let name = "World";
</script>

<main transition:fade>
  <Home {name} />
</main>

<style>
</style>
