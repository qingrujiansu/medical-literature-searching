export default [
  {
    url: '/api/user/login',
    method: 'get',
    response: () => {
        return {
          code: 200,
          message: '请求成功',
          data: {
            phone:18024946309,
            password:'123'
          }
        }
      }
  }
] 

