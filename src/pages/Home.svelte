<script>
  import api from '../services/api'
  import Container from '../components/Container.svelte'
  import Search from '../components/Search.svelte'
  import Filter from '../components/Filter.svelte'
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
    promise = api(`/region/${event.detail}`)
  }
  
</script>

<section class='home'>
  <Container>
    <div class='home__wrapper'>
      <Search on:search={onSearch} />
      <Filter on:filter={onFilter} />
    </div>
  </Container>
  <Container>
    <div class='home__cards'>
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
    </div>
  </Container>
</section>

<style lang="scss" global>
  @import '../styles/tools/index.scss';

  .home {

    &__wrapper {

      @media(min-width: 1024px) {

        display: flex;
        justify-content: space-between;
        align-items: center;

      }

    }
    
    &__cards {

      margin-top: 20px;

      & > .card-countrie {
  
        margin: 0 auto;
        margin-bottom: 15px;

        @media(min-width: 1024px) {
          
          min-height: 315px;
          margin: 5px 30px;

        }
  
      }

      @media(min-width: 1024px) {

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

      }

    }

  }
</style>