<script>
    import Card from "@/components/UI/Card.svelte"
    export let match = {}
    console.log(match)
</script>
  
<Card>
    {match.m} & {match.w} are a perfect match!
</Card>

<style>
</style>
  