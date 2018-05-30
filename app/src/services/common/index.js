import api from '../axios';

// 上传文件到kano
export const apiFileUpload = params => api.post('/fileupload/singlefile', params, {
  timeout: 200000,
});

// 从kano删除文件
export const apiDeleteFile = params => api.delete(`/fileupload/${params}`);

// 获取个人信息
export const apiGetUserInfo = params => api.get(`/home/profile/${params}`);

// 获取用户所在医生组列表
export const apiGetGroupList = params => api.get(`/doctorgroup/member/listDoctorGroups/${params}`);

// 切换医生组
export const apiSwitchGroup = params => api.get(`/doctorgroup/switch/${params.groupId}/${params.userId}`);

// 消息分页
// export const apiGetMessagePage = params => api.get('/msghist/page', params);
export const apiGetMessagePage = params => api.get(`/msghist/page?pageNo=${params.pageNo}&pageSize=${params.pageSize}&isRead=${params.isRead}`);

// 获取一个月内未读消息数量
// export const apiGetMonthUnReadMessageCount = () => api.get('/msghist/count?isRead=0');

// 获取一个月内未读消息列表
export const apiGetMonthUnReadMessageList = () => api.get('/msghist/listByDateWithRead');

// 标记所有消息为已读
export const apiMarkupAllRead = () => api.put('/msghist/markupAllRead');

// 标记指定消息为已读
export const apiMarkupRead = params => api.put(`/msghist/markupRead/${params}`);
