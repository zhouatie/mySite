const Home = r => require.ensure([], () => r(require('@/pages/home/index.vue')), 'home');
const arr = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }
];
// Home
export default arr;
