<script>
  import Layout from './layout/Layout.svelte'
  import Routes from './routes/Routes.svelte'
</script>

<Layout>
  <Routes />
</Layout>

<style lang='scss' global>
  @import './styles/app.scss';
  @import '../styles/tools/index.scss';

  .app-container {
    
    transition: all .3s ease-in-out;

    @include themify($themes) {
      background-color: themed('backgroundColor');
    }

  }

</style>