<script>
  import { Link } from 'svelte-routing'
  import Container from './Container.svelte'
</script>

<header class='header'>
  <Container>
    <Link class='header__logo' to='/'>Where in the world?</Link>
    <span class='header__theme'>Dark Mode</span>
  </Container>
</header>


<style lang='scss' global>
  @import '../styles/tools/index.scss';
  .header {

    & > .container {

      @extend %flex-spaced;

    }

  }
</style>