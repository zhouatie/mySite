/**
 * Created by zhangyanling on 17/8/11.
 */
const PageNo = r => require.ensure([], () => r(require('@/pages/base/404.vue')), '404');
const PageError = r => require.ensure([], () => r(require('@/pages/base/Error.vue')), 'error');

const arr = [
  {
    path: '/404',
    name: '404',
    component: PageNo
  },
  {
    path: '/error',
    name: 'error',
    component: PageError
  },
  {
    path: '/',
    redirect: '/home'
  }
];
// Home
export default arr;
