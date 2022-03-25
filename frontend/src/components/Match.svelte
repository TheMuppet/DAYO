<script>
    export let participants = [];
    export let match = {};

    let card_class = "card text-white bg-secondary mb-3";

    let man = participants.find(participant => {
        return participant.name === match.man; 
    });

    let woman = participants.find(participant => {
        return participant.name === match.woman;
    });

    if (match.probability === 100) {
        card_class = "card text-white bg-success mb-3";
    }

</script>

<div class={card_class} style="max-width: 20rem; display:inline-block; margin-right:30px;">
    <div class="card-body">
        <h4 class="card-title" style="text-align:center;">
            {man.name} ❤️ {woman.name}
        </h4>
        <div>
            <img src={man.img} alt="Image of {man.name}" width="45%" height="45%" style="float: left; margin:5px;">
            <p></p>
            <img src={woman.img} alt="Image of {woman.name}" width="45%" height="45%" style="float: right; margin:5px;">  
        </div>
        <div class="card-text" style="text-align:center;">
          with <b>{match.probability}%</b> certainty!
        </div>
    </div>
</div>

<style>
    img {
        border-radius: 50%;
    }
</style>
  