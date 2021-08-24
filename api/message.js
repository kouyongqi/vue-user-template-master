import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getRedisCode(phone) {
    return request({
      url: `/msm/message/send/${phone}`,
      method: 'post'
    })
  }
