<template>
  <div id="app" class="app">
    <page-header />

    <div class="app-body">
        <sidebar />

        <main class="main">
          <div class="container-fluid">
            <router-view></router-view>
          </div>
        </main>

        <page-aside/>
      </div>

      <page-footer/>
  </div>
</template>

<script>
  import PageHeader from '@/PageHeader/View';
  import Sidebar from '@/Sidebar/View';
  import PageAside from '@/PageAside/View';
  import PageFooter from '@/PageFooter/View';

  export default {
    name: 'app',
    components: {
      PageHeader,
      Sidebar,
      PageAside,
      PageFooter,
    },
  };

</script>

<style>
  @import '~font-awesome/css/font-awesome.min.css';
  @import '~simple-line-icons/css/simple-line-icons.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

</style>

<style lang="scss">
  @import 'src/scss/style';

</style>
