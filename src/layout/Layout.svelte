<script>
  import { Router } from 'svelte-routing';
  import Header from '../components/Header.svelte'
  import Routes from '../routes/Routes.svelte'
  export let url = '';
</script>

<Router url='{url}'>
  <Header />
  <main class='main'>
   <Routes />
  </main>
</Router>
