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

    height: 70px;
    @extend %flex-centered;
    @include box-shadow;
    
    & a {

      font-weight: bold;
      font-size: 16px
      
    }

    &__theme {

      font-weight: 500;
      cursor: pointer;
      
    }

    @include themify($themes) {
      background-color: themed('backgroundElements');
      color: themed('textColor')
    }

    & > .container {

      @extend %flex-spaced;

    }

  }
  
</style>