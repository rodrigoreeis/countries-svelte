<script>
  export let flag
  export let name
  export let population
  export let region
  export let capital
</script>

<template>
  <div class='card-countrie'>
    <figure class='card-countrie__flag'>
      <img src={flag} alt={name} />
    </figure>
    <div class='card-countrie__content'>
      <h1 class='card-countrie__name'>{name}</h1>
      <h1 class='card-countrie__population'>Population: {population}</h1>
      <h1 class='card-countrie__region'>Region: {region}</h1>
      <h1 class='card-countrie__capital'>Capital: {capital}</h1>
    </div>
  </div>
</template>

<style lang='scss'>

</style>