import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getCommentPage(courseid,currentpage,limit) {
    return request({
      url: `/edu/comment/getCourseComments/${courseid}/${currentpage}/${limit}`,
      method: 'get'
    })
  }

export function saveCommentInfo(comment) {
    return request({
      url: `/edu/comment/saveComment`,
      method: 'post',
      data:comment
    })
  }