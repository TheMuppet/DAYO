<script>
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

<div class="page-padding">
  <h1>Current Matches</h1>
  {#each matches as match}
  <Match {participants} {match}/>
  {/each}
</div>

<style>
  .page-padding {
    padding: 60px;
    padding-top: 100px;
    position: relative;
    z-index: -1;
  }
</style>
