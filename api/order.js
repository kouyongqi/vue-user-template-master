import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function createOrderIno(courseid) {
    return request({
      url: `/order/order/createOrder/${courseid}`,
      method: 'get'
    })
  }

export function getOrderNoInfo(orderno) {
    return request({
      url: `/order/order/getOrderInfo/${orderno}`,
      method: 'get'
    })
  }

export function createNativeInfo(orderno) {
    return request({
      url: `/order/pay-log/createNative/${orderno}`,
      method: 'get'
    })
  }

export function queryPayInfoStatus(orderno) {
    return request({
      url: `/order/pay-log/queryPayStatus/${orderno}`,
      method: 'get'
    })
  }

