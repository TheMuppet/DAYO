<script>
  import Match from "@/components/Match.svelte"
  export let matches = [];
</script>

<div class="matches-list">
  <p></p>
  <h1>Current Matches</h1>
  {#each matches as match (match.id)}
    <Match {match}/>
  {/each}
</div>

<style>
  .matches-list {
    padding: 60px;
  }
</style>
