import {
  request
} from './request'




export default {
  async login(data) {
    return await request('/User/Login', 'post', data)
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
  async shopCarList(data) {
    return await request('/ShoppingTrolley/list', 'post', data)
  },
  async getMyInfo(data) {
    return await request('/User/Main post', 'post', data)
  },
  async getCatigray(data) {
    return await request('/Merchandise/Type', 'post', data)
  },
  async getDaly(data) {
    return await request('/User/SignIn', 'post', data)
  },
  async getExchange(data) {
    return await request('/Integral/list', 'post', data)
  },
  async getGoods(data) {
    return await request('/RecommendMerchandise/Type', 'post', data)
  },
  async getNewMember(data) {
    return await request('/newUser/DiscountCoupon', 'post', data)
  },
  async getJoin(data) {
    return await request('/Issue', 'post', data)
  },
  async getOrderAll(data) {
    return await request('/Order/List', 'post', data)
  },
  async getOrderDetail(data) {
    return await request('/Order/ById', 'post', data)
  },
  async getToPay(data) {
    return await request('/Order/List/get1', 'post', data)
  },
  async getToSend(data) {
    return await request('/Order/List/get2', 'post', data)
  },
  async getToReceive(data) {
    return await request('/Order/List/get3', 'post', data)
  },
  async getTocomment(data) {
    return await request('/Order/List/get4', 'post', data)
  },
  async getOrderDetail(data) {
    return await request('/Order/ById', 'post', data)
  },
  async merchandiseImg(data) {
    return await request('/MerchandiseImg/Type', 'post', data)
  },
  async toBuy(data) {
    return await request('/add/Order1', 'post', data)
  },
  async getType(data) {
    return await request('/brand/Type', 'post', data)
  },
  async getQa(data) {
    return await request('/Issue', 'post', data)
  },
  async exchange(data) {
    return await request('/Integral/list', 'post', data)
  },
  async addPro(data) {
    return await request('/ShoppingTrolley/add', 'post', data)
  },
  async getDaly(data) {
    return await request('/User/SignIn', 'post', data)
  },
  async getOrderInfo(data) {
    return await request('/add/Order1', 'post', data)
  },
  async genertateOrder(data) {
    return await request('/verifyOrder', 'post', data)
  },
  async getOpenId(data) {
    return await request('/obtain/openId', 'post', data)
  },
  async getSign(data) {
    return await request('/obtain/sign', 'post', data)
  },
  async addAdress(data) {
    return await request('/add/profile', 'post', data)
  },
  async updateAdress(data) {
    return await request('/update/profile', 'post', data)
  },
  async delAdress(data) {
    return await request('/delete/profile', 'post', data)
  },
  async getAdressList(data) {
    return await request('/findByUserId/profile', 'post', data)
  },
  async getEx(data) {
    return await request('/Integral/Details', 'post', data)
  },
}
