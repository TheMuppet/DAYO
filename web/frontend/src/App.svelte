<script>
  import Home from "@/components/Home.svelte";
  import Matches from "@/components/Matches.svelte"
  import Impressum from "@/components/Impressum.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  export let menu = 1;

  let current_season = 3
  let newest_episode = 8
  let participants = []
  let matches = []

  onMount(async () => {
    fetch("http://localhost:8080/api/v1/participants")
    .then(response => response.json())
    .then(data => {
      participants = data["data"];
      console.log(participants)
    }).catch(error => {
      console.log(error);
      return 0;
    });
  });

  onMount(async () => {
    fetch("http://localhost:8080/api/v1/matches")
    .then(response => response.json())
    .then(data => {
      matches = data["data"];
      console.log(matches)
    }).catch(error => {
      console.log(error);
      return 0;
    });
  });

</script>

<svelte:head>
  <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.min.css">
</svelte:head>

<main transition:fade>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky">
    <div class="container-fluid">
      <img src="images/dayo_transparent_small.png" class="navbar-brand" href="/" alt="" width="60" height="60">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/" on:click|preventDefault={() => (menu = 1)}>Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/" on:click|preventDefault={() => (menu = 2)}>Matches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/" on:click|preventDefault={() => (menu = 3)}>Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/" on:click|preventDefault={() => (menu = 4)}>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br>
  {#if menu === 1}
    <Home />
  {:else if menu === 2}
    <Matches {participants}/>
  {:else if menu === 3}

  {:else if menu === 4}
  
  {:else if menu === 5}
    <Impressum />
  {/if}

  <ol class="breadcrumb justify-content-center">
    <li
            class="breadcrumb-item "><a class="text-muted" href="/" on:click|preventDefault={() => (menu = 5)}>Impressum
    </a></li>
  </ol>
</main>

<style>
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
