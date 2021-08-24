import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getAllBanners() {
    return request({
      url: `/cms/banneruser/getallbanner`,
      method: 'get',
    })
  }