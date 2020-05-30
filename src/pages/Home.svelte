<script>
  import api from '../services/api'
  import Card from '../components/Card.svelte'

  let promise = api('/all')
  
</script>

<template>
  <section class='home'>
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
    {:catch error}
      <p>{error.message}</p>
    {/await}



  </section>
</template>

<style lang="scss">
</style>