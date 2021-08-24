import axios from 'axios'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8009', // api的base_url
  timeout: 20000 // 请求超时时间
})

// http request 拦截器(针对所有ajax请求 即以http://localhost:8009打头的)
service.interceptors.request.use(
  config => {
  //debugger
  if (cookie.get('guli_token')) {
    //再从请求头中取出guli_token的值，新建一个变量token将值赋值过去
    //并且新的token覆盖了cookie（可能由于两个值是一样的）
    config.headers['token'] = cookie.get('guli_token');
  }
    return config
  },
  err => {
  return Promise.reject(err);
})

// http response 拦截器
service.interceptors.response.use(
  response => {
    //debugger
    if (response.data.code == 28004) {
        console.log("response.data.resultCode是28004")
        // 返回 错误代码-1 清除ticket信息并跳转到登录页面
        //debugger
        window.location.href="/login"
        return
    }else{   
      if (response.data.code !== 20000) {
        //20001  //支付失败，报错误信息（不返回response）
        if(response.data.code != 25000) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 5 * 1000
          })
        }
        //25000：订单支付中，不做任何提示(不返回response)
      } else {      //20000  支付成功  返回response
        return response;
      }
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});

export default service