<script>
  import { Route } from 'svelte-routing';
  import Home from '../pages/Home.svelte';
  import Countrie from '../pages/Countrie.svelte';
</script>

<template>
  <Route path='/'>
    <Home />
  </Route>
  <Route path='/countrie'>
    <Countrie />
  </Route>
</template>
