
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
        return {
          code: 200,
          message: '请求成功',
          type: 'success',
          data: {
            "string|1-10": "★",
            "number|1-100": 100,
            data:'@date("yyyy-MM-dd")'
          }
        }
      }
  }
 
] 

