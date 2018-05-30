/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: {
    auth
  },

  /**
   * If strict mode should be enabled
   */
  strict: false
});

store.prevActionArg = [];
// 不记录到store中
const actionBlackList = [
  'auth/getCsrfToken'
];
store.dispatch = new Proxy(store.dispatch, {
  apply(target, ctx, args) {
    if (!actionBlackList.includes(args[0])) store.prevActionArg.push(args);
    return Reflect.apply(target, ctx, args);
  }
});

export default store;
