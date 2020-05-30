<script>
  import { createEventDispatcher } from 'svelte'
  import debounce from 'lodash.debounce'
  export let search = ''

  const dispatch = createEventDispatcher()
  
  function onSearch() {
    dispatch('search', search)
  }

</script>

<div class='search'>
  <input 
    class='search__input' 
    on:keyup={debounce(onSearch)}
    bind:value={search} 
    placeholder='Search for a country'
  />
</div>

<style lang='scss' global>
  @import '../styles/tools/index.scss';

  .search {
    
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
    @include box-shadow;
    border-radius: 5px;
    display: flex;

    @media (min-width: 1024px) {

      max-width: 400px;

    }

    @include themify($themes) {

      background-color: themed('backgroundElements');
      color: themed('textColor')

    }

    &__input {

      width: 100%;
      padding: 15px;
      font-weight: 500c;
      font-size: 16px;
      
      &::placeholder {

        font-weight: 500c;
        font-size: 14px;

      }
      @include themify($themes) {

        color: themed('textColor')

      }

    }

  }

</style>