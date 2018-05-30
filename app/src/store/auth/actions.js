// import * as types from '../types';
import * as services from '@/services/auth';
import app from '@/main';
export default {
  async login({ commit }, params) {
    const data = await services.apiLogin(params);
    sessionStorage.login = true;
    return data;
  },
  logout(context) {
    sessionStorage.login = '';
    app.$router.replace('/login');
  }
};
