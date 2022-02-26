<script>
  export let name;
  let src = '/images/logo_transparent.png'
</script>

<div class="columns main">
  <div >
    <h1 class="titel">Welcome! 👋</h1>
    <h2 class="follow">DAYO your perfect "Are You the One?" watch-party companion 💅</h2>
    <p class="description">

    </p>
    <button class="primary">Invite ME!</button>
  </div>
  <img {src} alt="dayo" >
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@200;500;800&display=swap');
  .main {
    display: flex;
    justify-content: space-around;
    top: 25%;
    position: absolute;
    left: 10%;
  }
  .titel {
    font-weight: 800;
    font-size: 4.5rem;
  }
  .follow {
    font-weight: 500;
    font-size: 2rem;
    flex-wrap: wrap;
  }
  .description {
    font-weight: 200;
    font-size: 1.5rem;
  }

  .primary {
    display: block;
    background: white;
    color: deeppink;
    width: 10rem;
    height: 4rem;
    line-height: 60px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 800;
    text-align: center;
    margin: 5% auto;
    border-radius:100px;
    border:1px solid deeppink;
    transition: background-position .3s cubic-bezier(0.19, 1, 0.22, 1) .1s, color .5s ease 0s, background-color .5s ease;
  }
  .primary:hover {
    color:white;
    background-color:deeppink;
    background-position: -100% 100%;
  }
</style>
