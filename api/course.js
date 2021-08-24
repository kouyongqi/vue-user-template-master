import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getCoursePageByConditional(currentpage,limit,coursequery) {
    return request({
      url: `/edu/frontcourse/conditionalteacherinfo/${currentpage}/${limit}`,
      method: 'post',
      data:coursequery
    })
  }

export function getSubjectList() {
    return request({
      url: `/edu/subject/getAllSubject`,
      method: 'get'
    })
  }

export function getCourseInfoVoAndChapterVo(courseid) {
    return request({
      url: `/edu/frontcourse/courseinfoandchapterandvideo/${courseid}`,
      method: 'get'
    })
  }  