<script>
  import { createEventDispatcher } from 'svelte'
  import { fields } from '../constants/filter' 
  import { has } from '../utils/helpers'

  let filter = '' 

  const dispatch = createEventDispatcher()

  function onFilter(callback) {
    filter = callback
    dispatch('filter', callback.toLowerCase())
  }
</script>

<div class='filter'> 
  <p>{has(filter) ? filter : 'Filter by Region'}</p>
  <div class='filter__dropdown'>
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