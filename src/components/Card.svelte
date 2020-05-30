<script>
  export let flag
  export let name
  export let population
  export let region
  export let capital
</script>

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

<style lang='scss'>
  .card-countrie {

    max-width: 250px;
    margin: 0 auto;
    border: 1px solid green;
    margin-bottom: 15px;

    &__flag 
      > img {
        width: 250px;
    }

    &__content {

      margin-top: 15px;
      padding: 15px 20px 25px 20px;
      border: 1px solid red

    }

  }
</style>