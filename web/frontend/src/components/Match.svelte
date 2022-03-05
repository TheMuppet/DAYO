<script>
    import Card from "@/components/UI/Card.svelte"
    export let match = {}
    console.log(match)
</script>
  
<Card>
    <div>
        <div class="floatLeft">
            <img src={match.man.pic} alt="Picture of {match.man.name}">
        </div>
        <div class="floatRight">
            <img src={match.woman.pic} alt="Picture of {match.woman.name}">
        </div>
    </div>
    <div class="centered">
        {match.man.name} & {match.woman.name} are with {match.probability}% certainty a perfect match!
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
  