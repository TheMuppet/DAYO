<script>
    import Card from "@/components/UI/Card.svelte"
    export let match = {}
    console.log(match)
</script>
  
<Card>
    <img src={match.man.pic} alt="test">
    {match.man.name} & {match.woman.name} are a perfect match!
</Card>

<style>
</style>
  