import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getHotData() {
    return request({
      url: `/edu/user/getallcourseandteacher`,
      method: 'get',
    })
  }