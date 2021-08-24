import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function userLogin(userInfo) {
    return request({
      url: `/ucenter/member/login`,
      method: 'post',
      data:userInfo
    })
  }

export function getUserInfo() {
    return request({
      url: `/ucenter/member/getuserinfo`,
      method: 'get',
    })
  }