import api from '../axios';

// 获取分页信息
export const apiGetPatientHistory = params => api.post('/patient/disease/hist/page', params);
// 添加
export const apiAddPatientHistory = params => api.post('/patient/disease/hist', params);
// 修改
export const apiEditPatientHistory = params => api.post('/patient/disease/hist/update', params);
// 删除
export const apiDeletePatientHistory = params => api.delete(`/patient/disease/hist/${params.id}`);
// 疾病标签搜索
export const apiSearchPatientName = params => api.get(`/patient/disease/hist/search?disease=${params.disease}`);
// --------------- 用药历史 -------------------
// 用药历史
export const apiGetDrugHistory = params => api.post('/patient/drug/hist/page', params);
// 添加
export const apiAddDrugHistory = params => api.post('/patient/drug/hist', params);
// 修改
export const apiEditDrugHistory = params => api.post('/patient/drug/hist/update', params);
// 删除
export const apiDeleteDrugHistory = params => api.delete(`/patient/drug/hist/${params.id}`);
// 用药标签搜索
export const apiSearchDrugName = params => api.get(`/patient/drug/hist/search?drugName=${params.drugName}`);
// --------------- 操作记录 -----------------
export const apiGetOperationHistory = params => api.post('/patient/management/operation/hist/page', params);
// 跳转到疾病历史界面
export const apiLinkToPatientHistory = params => api.get(`/patient/disease/hist?id=${params.id}`);
// 跳转到用药历史界面
export const apiLinkToDrugHistory = params => api.get(`/patient/drug/hist?id=${params.id}`);
// --------------- 随访详情 ----------------
export const apiGetPlanDetail = params => api.get(`/followupPlan/${params.id}`);
// 执行随访计划
export const apiFinishExecute = params => api.put('/followupPlan/execute', params);
