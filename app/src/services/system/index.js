import api from '../axios';

// 医生组以及成员列表查询
export const apiGetDoctorGroup = params => api.post('/doctorgroup/pageQuery', params);

// 医生组详情
export const apiGetDoctorGroupInfo = params => api.get(`/doctorgroup/${params.id}`, {
  params,
});

// 获取所有的医院列表
export const apiGetHospitalList = params => api.get(`/doctorgroup/listHospitals/${process.env.ORGANIZATION_ID}`, params);

// 添加医生组
export const apiAddDoctorGroup = params => api.post('/doctorgroup', params);

// 编辑医生组
export const apiUpdateDoctorGroupInfo = params => api.put('/doctorgroup', params);

// 删除医生组
export const apiDeleteDoctorGroup = params => api.delete(`/doctorgroup/${params.id}`);

// 医生组操作信息查询
export const apiGetDoctorGroupOperationList = params => api.post('/doctorgroup/operation/hist', params);

// 医生组下的角色列表查询
export const apiGetDoctorGroupRoles = params => api.get(`/doctorgroup/listMemberRoles/${params.id}`);

// 医生组成员列表分页查询
export const apiGetMemberList = params => api.post('/doctorgroup/member/pageQuery', params);

// 添加医生组成员
export const apiAddGroupMember = params => api.post('/doctorgroup/member', params);

// 编辑医生组成员
export const apiUpdateGroupMember = params => api.put('/doctorgroup/member', params);

// 删除医生组成员
export const apiDeleteGroupMember = params => api.delete(`/doctorgroup/member/${params}`);

// 根据医生姓名查找医生
export const apiSearchDoctor = params => api.get(`/doctorgroup/member/searchDoctor?name=${params}`);
