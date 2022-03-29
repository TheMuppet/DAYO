<script>
  import Navbar from "@/components/Navbar.svelte";
  import Footer from "@/components/Footer.svelte";
  import Match from "@/components/Match.svelte";
  import { onDestroy } from "svelte";

  import { ParticipantStore, MatchStore } from '@/stores.js';

  let current_season = 3;
  let newest_episode = 8;

  let participants = [];
  const participant_unsub = ParticipantStore.subscribe((data) => {participants = data});
  participants = participants.filter(participant => {
    return participant.season === current_season;
  })

  let matches = [];
  const match_unsub = MatchStore.subscribe((data) => {matches = data});
  matches = matches.filter(matches_obj => {
    return matches_obj.season === current_season && matches_obj.episode === newest_episode;
  })
  matches = matches[0]["matches"];

  let sorted_matches = matches.sort(function (a, b) {
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
  
  onDestroy(() => {
    participant_unsub();
    match_unsub();
  });
</script>

<Navbar page="matches"/>
<div class="page-padding">
  {#if matches.length === 0}
	  <h1>There are no matches right now. Please come back later!</h1>
  {:else}
    <h1>Current Matches</h1>
    {#each sorted_matches as match}
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
