<script>
  import Home from "@/pages/Home.svelte";
  import Matches from "@/pages/Matches.svelte";
  import Impressum from "@/pages/Impressum.svelte";
  import { onMount } from "svelte";
  import { Router, Route } from "https://raw.githubusercontent.com/EmilTholin/svelte-routing/master/src/index.js";
  import { fade } from "svelte/transition";

  import { ParticipantStore, MatchStore } from '@/stores.js';

  let url = "";

  ParticipantStore.useLocalStorage();
  MatchStore.useLocalStorage();  

  onMount(async () => {
    fetch("https://dayo-project.herokuapp.com/api/v1/participants")
    .then(response => response.json())
    .then(data => {
      ParticipantStore.set(data["data"]);
    }).catch(function(){
      return 0;
    });
    fetch("https://dayo-project.herokuapp.com/api/v1/matches")
    .then(response => response.json())
    .then(data => {
      MatchStore.set(data["data"]);
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
        <Matches/>
      </Route>
      <Route path="impressum">
        <Impressum/>
      </Route>
    </div>
  </Router>
</main>

<style>
</style>
