import { request } from './request'




export default {
  async login(data) {
    return await request('/User/Login','post',data)
  },
  async getIndexData(data) {
    return await request('/Banner/list', 'get', data)
  },
  async getCode(data) {
    return await request('/User/enroll1', 'post', data)
  },
  async checkCode(data) {
    return await request('/User/enroll2', 'post', data)
  },
  async register(data) {
    return await request('/User/enroll3', 'post', data)
  },
  async proDetail(data) {
    return await request('/Merchandise/particulars', 'post', data)
  },
  async myData(data) {
    return await request('/User/Main', 'post', data)
  },
}