import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function load(path) {
  return () => System.import(`@/${path}.vue`);
}

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/',
    name: 'Home',
    component: load('Home/View'),
  }, {
    path: '/hr/employees',
    name: 'HrEmployees',
    component: load('Hr/Employees/View'),
  }, {
    path: '*',
    component: load('Home/View'),
  }],
});
