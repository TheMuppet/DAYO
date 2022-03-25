<script>
  import Navbar from "@/components/Navbar.svelte";
  import Footer from "@/components/Footer.svelte";
  import Match from "@/components/Match.svelte";

  export let participants = [];
  export let matches = [];

  matches.sort(function (a, b) {
    if (a.probability < b.probability) {
      return 1;
    } else if (a.probability === b.probability) {
      if (a.man > b.man) {
        return 1;
      } else if (a.man === b.man) {
        (a.woman > b.woman) ? 1 : -1;
      } else {
        return -1;
    }
    } else {
      return -1;
    }
  });
  
</script>

<Navbar page="matches"/>
<div class="page-padding">
  {#if matches.length === 0}
	  <h1>There are no matches right now. Please come back later!</h1>
  {:else}
    <h1>Current Matches</h1>
    {#each matches as match}
    <Match {participants} {match}/>
    {/each}
  {/if}
</div>
<Footer/>

<style>
  .page-padding {
    padding: 60px;
    padding-top: 120px;
    position: relative;
    z-index: -1;
  }
</style>
