<script>
  import api from '../services/api'
  import Container from '../components/Container.svelte'
  import Search from '../components/Search.svelte'
  import Card from '../components/Card.svelte'

  import { has } from '../utils/helpers'

  let promise = api('/all')

  function onSearch(event) {
    const isSearch = has(event.detail)
    isSearch 
      ? promise = api(`/name/${event.detail}`)
      : promise = api('/all')
  }

  function onFilter(event) {

  }
  
</script>

<section class='home'>
  <Container>
    <Search on:search={onSearch} />
    {#await promise}
      <p>...loading</p>
    {:then countries}
      {#if has(countries)}
        {#each countries as countrie}
          <Card 
            flag={countrie.flag}
            name={countrie.name} 
            population={countrie.population}
            region={countrie.region}
            capital={countrie.capital}
          />
        {/each}
        {:else}
          <p>empy seach</p>
      {/if}
    {/await}
  </Container>
</section>

<style lang="scss">
</style>