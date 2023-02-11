import http from '../axios/http.js';

const queryApi = info => http.get('/all',info);

const deleteApi = id => http.delete(`/delete?id=${id}`);

const addApi = info => http.post('/add', info);

const updateApi = info => http.put(`/update`, info);

export default {
  queryApi,
  deleteApi,
  addApi,
  updateApi
}