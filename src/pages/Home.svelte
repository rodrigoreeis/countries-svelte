<script>
  import api from '../services/api'
  import Container from '../components/Container.svelte'
  import Search from '../components/Search.svelte'
  import Card from '../components/Card.svelte'

  let promise = api('/all')
  
</script>

<section class='home'>
  <Container>
    <Search />
    {#await promise}
      <p>...loading</p>
    {:then countries}
      {#each countries as countrie}
        <Card 
          flag={countrie.flag}
          name={countrie.name} 
          population={countrie.population}
          region={countrie.region}
          capital={countrie.capital}
        />
      {/each}
    {/await}
  </Container>
</section>

<style lang="scss">
</style>