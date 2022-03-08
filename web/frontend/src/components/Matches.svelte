<script>
  import Match from "@/components/Match.svelte"
  export let matches = []
</script>

<div class="matches-list">
  <h1>Current Matches</h1>
  {#each matches as match}
    <Match {match}/>
  {/each}
</div>

<style>
  .matches-list {
    padding: 60px;
    padding-top: 100px;
    position: relative;
    z-index: -1;
  }
</style>
