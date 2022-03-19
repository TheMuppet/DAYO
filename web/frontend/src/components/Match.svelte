<script>
    import Card from "@/components/UI/Card.svelte"
    export let participants = []
    export let match = {}

    let man = participants.find(participant => {
        return participant.name === match.man; 
    });

    let woman = participants.find(participant => {
        return participant.name === match.woman; 
    });

</script>
  
<Card>
    <div>
        <div class="floatLeft">
            <img src={man.img} alt="Picture of {man.name}">
        </div>
        <div class="floatRight">
            <img src={woman.img} alt="Picture of {woman.name}">
        </div>
    </div>
    <div class="centered">
        {man.name} & {woman.name} are with {match.probability}% certainty a perfect match!
    </div>
</Card>

<style>
    .floatLeft{
        float:left;
    }
    .floatRight{
        float:right;
    }
    .centered{
        text-align: center;
    }
</style>
  