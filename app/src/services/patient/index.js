import api from '../axios';

// 获取患者列表
export const apiGetPatientList = params => api.post('/healthcareContract/pageQuery', params);
// 删除患者
export const apiDeletePatient = params => api.delete(`/healthcareContract/${params.id}?closePendingPlan=0`);
// 更新患者
export const apiUpdatePatient = params => api.put('/healthcareContract', params);
// 搜索, 患者列表，获取患者姓名, 远程搜索
export const apiGetPatientName = params => api.get(`/healthcareContract/search/patientName?name=${params.name}`);
// 获取患者详情,根据签约id
export const apiGetPatientDetail = params => api.get(`/healthcareContract/${params.id}`);
// 获取患者详情，根据groupId和patientId
export const apiGetPatientDetailByPid = params => api.get(`/healthcareContract/fetch/${params.doctorGroupId}/${params.patientId}`);

// 获取评估表列表
export const apiGetEvaluateList = params => api.post('/survey/page', params);

// 获取随访计划列表
export const apiGetVisitList = params => api.post('/followupPlan/pageQuery', params);
// 新增 随访计划
export const apiAddVisit = params => api.post('/followupPlan', params);
// 编辑 随访计划
export const apiEditVisit = params => api.put('/followupPlan', params);
// 关闭、分配 随访计划
export const apiUpdateVisit = (params) => {
  const id = params.id;
  delete params.id;
  return api.put(`/followupPlan/assignOrClose/${id}`, params);
};
// 删除 随访计划
export const apiDeleteVisit = params => api.delete(`/followupPlan/${params.id}`);

// 每天的随访数量，根据医生组获取
export const apiGetDoctorVisit = params => api.post('/followupPlan/doctorGroup/pendingPlans', params);
// 每天的随访数量，根据患者获取
export const apiGetPatientVisit = params => api.post('/followupPlan/patientPlans/perMonth', params);


// 健康档案，基本健康信息
export const apiGetHealthBasic = params => api.post('/patient/health/record/basic', params);
// 健康档案，电子病历列表
export const apiGetHealthRecord = params => api.post('/patient/health/record/medicalEvent', params);
// 电子档案，处方
export const apiGetHealthMedicine = params => api.post('/patient/health/record/westernMedicine', params);
// 电子档案，门诊
export const apiGetHealthClinic = params => api.post('/patient/health/record/outPatient', params);
