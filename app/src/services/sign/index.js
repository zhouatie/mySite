import api from '../axios';

// 就诊人列表
export const apiSearchSign = params => api.post('/healthcareContract/search', params);
// 签约
export const apiSetSign = params => api.post('/healthcareContract', params);
// 签约修改
export const apiUpdateSign = params => api.put('/healthcareContract', params);
// 发送短信
export const apiSendAuthMessage = params => api.post('/healthcareContract/sendAuthMessage', params);

// 检查链接有效性
export const apiCheckUrl = params => api.post('/healthcareContract/checkAuthMessage', params);

// 发送手机验证码
export const apiSendCode = params => api.post('/healthcareContract/sendVerifyCode', params);

// 提交身份验证信息
export const apiCommitAuthInfo = params => api.post('/healthcareContract/commitAuthInfo', params);
// 签约获取医生组
export const apiSearchDoctorGroup = params => api.get(`/doctorgroup/listDoctorGroups/${params.hospitalId}`);
