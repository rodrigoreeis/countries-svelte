<script>
  import { Router } from 'svelte-routing';
  import Header from '../components/Header.svelte'
  export let url = '';
</script>

<Router url='{url}'>
  <Header />
  <main class='main'>
    <slot></slot>
  </main>
</Router>
