import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getPlayAuth(sourseid) {
    return request({
      url: `/vod/vod/getvodsourseid/${sourseid}`,
      method: 'get'
    })
  }
 