<script>
  import { createEventDispatcher } from 'svelte'
  import { fields } from '../constants/filter' 
  import { has } from '../utils/helpers'

  let filter = '' 
  let visible = false

  const dispatch = createEventDispatcher()

  function onFilter(callback) {
    filter = callback
    dispatch('filter', callback.toLowerCase())
  }

  function toggleDropdown() {
    visible = !visible
  }

</script>

<div class='filter' on:click={toggleDropdown}> 
  <p>{has(filter) ? filter : 'Filter by Region'}</p>
  <div 
    class='filter__dropdown' 
    class:is--active={visible}
  >
    <ul class='filter__dropdown-list'>
        {#each fields as field}
          <li 
            class='filter__dropdown-item'
            on:click={() => onFilter(field)}
          >
            {field}
          </li>
        {/each}
    </ul>
  </div>
</div>

<style lang='scss' global>
  @import '../styles/tools/index.scss';
  
  .filter {
    
    position: relative;
    max-width: 150px;
    padding: 15px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    @include box-shadow;
    cursor: pointer;

    @include themify($themes) {

      background-color: themed('backgroundElements');
      color: themed('textColor')

    }

    &__dropdown {

      position: absolute;
      @include box-shadow;
      border-radius: 5px;
      padding: 15px;
      width: 100%;
      left: 0;
      top: 50px;
      display: none;

      &.is--active {

        display: block

      }
      
      @include themify($themes) {

        background-color: themed('backgroundElements');
        color: themed('textColor')

      }

      &-item {
        &:not(:last-of-type){

          margin-bottom: 8px;

        }

      }

    }

  }

</style>