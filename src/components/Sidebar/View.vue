<template>
  <div class="sidebar">
    <div class="sidebar-header"></div>

    <div class="sidebar-form"></div>

    <nav class="sidebar-nav">
      <div slot="header"></div>

      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link">
            <i class="fa fa-home"></i> Home
          </router-link>
        </li>

        <li class="nav-item nav-dropdown">
          <div class="nav-link nav-dropdown-toggle" @click="toggleDropdown">
            <i class="fa fa-home"></i> HR
          </div>

          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link to="/hr/employees" class="nav-link">
                <i class="fa fa-empty"></i> Dolgozók
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="sidebar-footer"></div>

    <button class="sidebar-minimizer" type="button" @click="sidebarMinimize();brandMinimize()"></button>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    methods: {
      toggleDropdown(e) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
      },
      sidebarMinimize() {
        document.body.classList.toggle('sidebar-minimized');
      },
      brandMinimize() {
        document.body.classList.toggle('brand-minimized');
      },
    },
  };

</script>

<style scoped>
  .nav-link {
    cursor: pointer;
  }

</style>
