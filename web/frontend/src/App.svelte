<script>
  import Home from "@/components/Home.svelte";
  import Matches from "@/components/Matches.svelte";
  import { fade } from "svelte/transition";
  export let menu = 1;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.min.css">
</svelte:head>

<main transition:fade>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <img src="images/logo_transparent.png" class="navbar-brand" href="/" alt="" width="80" height="80">
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
  {#if menu === 1}
    <Home />
  {:else if menu === 2}
    <Matches />
  {:else if menu === 3}

  {:else if menu === 4}

  {/if}
</main>

<style>
</style>
