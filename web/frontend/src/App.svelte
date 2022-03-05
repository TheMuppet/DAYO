<script>
  import Home from "@/components/Home.svelte";
  import Matches from "@/components/Matches.svelte"
  import Impressum from "@/components/Impressum.svelte";
  import { fade } from "svelte/transition";
  export let menu = 1;

  let matches = [
    {
      id: 1,
      man: {
        name : 'Andre',
        pic : 'https://ais-cf.tvnow.de/tvnow/cms/7757881aaa8a0be975514c2277a67bda/400x0/image.jpg'
      },
      woman: {
        name : 'Dana',
        pic : 'https://ais-cf.tvnow.de/tvnow/cms/5fa1f483fda2271d5395a7837748e777/400x0/image.jpg'
      },
      probability : 100
    },
    {
      id: 2,
      man: {
        name : 'Antonino',
        pic : 'https://ais-cf.tvnow.de/tvnow/cms/4b1e099767b2ceecdbecba42f4467d26/400x0/image.jpg'
      },
      woman: {
        name : 'Estelle',
        pic : 'https://ais-cf.tvnow.de/tvnow/cms/075b491ef0600923d4b975c98128684d/400x0/image.jpg'
      },
      probability : 80
    },
    {
      id: 3,
      man: {
        name : 'Dustin',
        pic : 'https://ais-cf.tvnow.de/tvnow/cms/2611636cfc65f5f83cb12c4121e5b277/400x0/image.jpg'
      },
      woman: {
        name : 'Isabelle',
        pic : 'https://ais-cf.tvnow.de/tvnow/cms/359cb304c833e004c8580a3a365f886e/400x0/image.jpg'
      },
      probability : 100
    }
  ];
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
    <Matches {matches}/>
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
