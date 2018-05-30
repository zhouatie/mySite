import axios from 'axios';
import app from '@/main';

const api = axios.create({
  baseURL: '/api',
  timeout: 8000, // 超时时间
  responseType: 'json', // default
  withCredentials: true
});

// 响应拦截
api.interceptors.response.use((res = {}) => {
  if (res.data.code === 0) return Promise.resolve(res.data && res.data.data);
  if (res.data.code === 12) {
    app.$message.error('会话超时，请重新登录');
    app.$router.push('/login');
    return false;
  } else {
    app.$message.error(res.data.msg)
  }
  return Promise.reject(res.data);
}, (e) => {
  if (e.code === 'ECONNABORTED' && e.message.indexOf('timeout') !== -1) {
    app.$message.error('系统超时,请刷新重试');
    return Promise.reject(e);
  } else {
    app.$message.error('系统暂无响应,请稍后再试');
    return Promise.reject(e);
  }
});
export default api;
