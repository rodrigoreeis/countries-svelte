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
    <p class='card-countrie__population'>Population: <span>{population}</span></p>
    <p class='card-countrie__region'>Region: <span>{region}</span></p>
    <p class='card-countrie__capital'>Capital: <span>{capital}</span></p>
  </div>
</div>

<style lang='scss' global>
  @import '../styles/tools/index.scss';

  .card-countrie {

    max-width: 250px;
    @include box-shadow;
    border-radius: 5px;

    @include themify($themes) {

      background-color: themed('backgroundElements');
      color: themed('textColor')

    }

    &__flag 
      > img {

        width: 250px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

      }

    &__content {

      margin-top: 15px;
      padding: 15px 20px 25px 20px;

    }

    &__name {

      font-size: 16px;
      font-weight: 800;
      margin-bottom: 5px;

    }

    &__population,
    &__region,
    &__capital {

      font-size: 14px;
      font-weight: 600;
      margin-bottom: 3px;

      > span {

        font-weight: 300

      }

    }

  }
  
</style>