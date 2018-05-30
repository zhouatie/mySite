import Vue from 'vue'
import Router from 'vue-router'

import Base from './base'
import Auth from './auth'
import Home from './home'

Vue.use(Router)

const routes = [...Auth, ...Home, ...Base];
const router = new Router({
  mode: 'history',
  routes
})

// 路由白名单
const whiteList = ['mobile', 'login'];

router.beforeEach((to, from, next) => {
  const matched = router.getMatchedComponents(to); // 是否有匹配组件
  console.log(matched, 'matched')
  if (matched.length > 0) {
    console.log(!whiteList.some(item => to.path.includes(item)), !sessionStorage.getItem('login'))
    // if (!whiteList.some(item => to.path.includes(item)) && !sessionStorage.getItem('login')) next('/login');
    // else next();
    next();
  } else {
    next({
      name: '404'
    });
  }
});

export default router;
