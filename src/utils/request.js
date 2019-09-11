/**
 * 封装微信的的request
 */
// const baseUrl = 'http://49.234.133.200:8001'
const baseUrl = 'https://xiaocx.hbyuhan.com:8001'

export function request(url, method = "GET", data,config={}) {
  console.log('sessionId', wx.getStorageSync('sessionId'));
  return new Promise(function (resolve, reject) {
    wx.request({
      url: baseUrl+url,
      data: data,
      method: method,
      header: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID='+ wx.getStorageSync('sessionId')
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (err) {
       let msg=JSON.stringify(err)
        wx.showModal({
          title: '错误',
          // content: '网络异常',
          content:msg,
          showCancel: false
        });
        reject(err);
      }
    })
  });
}


