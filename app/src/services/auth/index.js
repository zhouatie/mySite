import api from '../axios';

export const apiLogin = (params) => api.post('/login', params);
