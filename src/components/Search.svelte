<script>
  export let search = ''

</script>

<div class='search'>
  <input 
    class='search__input' 
    bind:value={search} 
    placeholder='Search for a country'
  />
</div>

<style lang='scss'>
  .search {
    width: 100%;
    border: 1px solid slategray;
    margin-bottom: 20px;
    margin-top: 20px;

    &__input {

      width: 100%;
      padding: 15px;

    }
  }
</style>