<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import Countrie from './routes/Countrie.svelte';

  export let url = '';
</script>

<Router url='{url}'>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/countrie'>countrie</Link>
  </nav>
  <div>
    <Route path='/countrie'>
			<Countrie />
		</Route>
    <Route path='/'><Home /></Route>
  </div>
</Router>

<style lang='scss' global>
  @import './styles/app.scss';
</style>