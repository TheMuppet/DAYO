<script>
  import Home from "@/pages/Home.svelte";
  import Matches from "@/pages/Matches.svelte";
  import Impressum from "@/pages/Impressum.svelte";
  import { onMount } from "svelte";
  import { Router, Route } from "https://raw.githubusercontent.com/EmilTholin/svelte-routing/master/src/index.js";
  import { fade } from "svelte/transition";

  let url = "";

  let current_season = 3;
  let newest_episode = 8;
  let participants = [];
  let matches = [];

  onMount(async () => {
    fetch("https://dayo-project.herokuapp.com/api/v1/participants")
    .then(response => response.json())
    .then(data => {
      participants = data["data"];
      participants = participants.filter(participant => {
        return participant.season === current_season;
      })
    }).catch(function(){
      return 0;
    });
  });

  onMount(async () => {
    fetch("https://dayo-project.herokuapp.com/api/v1/matches")
    .then(response => response.json())
    .then(data => {
      matches = data["data"];
      matches = matches.filter(matches_obj => {
        return matches_obj.season === current_season && matches_obj.episode === newest_episode;
      })
      matches = matches[0]["matches"];
    }).catch(function(){
      return 0;
    });
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.min.css">
</svelte:head>

<main transition:fade>
  <Router url="{url}">
    <div>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="matches">
        <Matches {participants} {matches}/>
      </Route>
      <Route path="impressum">
        <Impressum/>
      </Route>
    </div>
  </Router>
</main>

<style>
</style>
