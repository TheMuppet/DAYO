<script>
    export let page = "";

    let home_nav = "";
    let matches_nav = "";

    if (page === "home") {
        home_nav = "nav-link active";
        matches_nav = "nav-link";
    };
    if (page === "matches") {
        home_nav = "nav-link";
        matches_nav = "nav-link active";
    };
    if (page === "impressum") {
        home_nav = "nav-link";
        matches_nav = "nav-link";
    };
</script>


<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky">
  <div class="container-fluid">
    <img src="images/dayo_transparent_small.png" class="navbar-brand" alt="" width="60" height="60">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a class={home_nav} href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class={matches_nav} href="/matches">Matches</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>