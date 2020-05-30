<script>
  import { Link } from 'svelte-routing'
  import Container from './Container.svelte'

  let theme = 'dark'

  function onChangeTheme() {
    const appRef = document.getElementById('app')
    theme = theme === 'dark' ? 'light' : 'dark'
    appRef.classList.contains('theme-dark')
      ? appRef.classList.remove('theme-dark')
      : appRef.classList.remove('theme-light')
    appRef.classList.toggle(`theme-${theme}`)
  }

</script>

<header class='header'>
  <Container>
    <Link class='header__logo' to='/'>Where in the world?</Link>
    <span class='header__theme' on:click={onChangeTheme}>{theme} mode</span>
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
      text-transform: capitalize;
      
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