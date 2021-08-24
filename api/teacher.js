import request from '/utils/request'
//request帮我们封装返回响应data reponse.data

export function getTeacherPage(currentpage,limit) {
    return request({
      url: `/edu/frontteacher/teacherpage/${currentpage}/${limit}`,
      method: 'get'
    })
  }

export function getTeacherAndCourseList(teacherid) {
    return request({
      url: `/edu/frontteacher/teacherinfoandcourseinfo/${teacherid}`,
      method: 'get'
    })
  }