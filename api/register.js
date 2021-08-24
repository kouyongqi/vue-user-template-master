import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function userRegister(userInfo) {
    return request({
      url: `/ucenter/member/register`,
      method: 'post',
      data:userInfo
    })
  }