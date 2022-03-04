<script>
  import Match from "@/components/Match.svelte"
  export let matches = [];
</script>

<div class="matches-list">
  <h1>Current Matches</h1>
  <p></p>
  {#each matches as match (match.id)}
    <Match {match}/>
  {/each}
</div>

<style>
  .matches-list {
    padding: 20px;
  }
</style>
