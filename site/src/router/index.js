import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import ButtonPage from '../pages/Button';
import IconPage from '../pages/Icon';
import InputPage from '../pages/Input';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/icon',
      name: 'Icon',
      component: IconPage,
    },
    {
      path: '/button',
      name: 'Button',
      component: ButtonPage,
    },
    {
      path: '/input',
      name: 'Input',
      component: InputPage,
    },
  ],
});
