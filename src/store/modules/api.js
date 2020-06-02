const baseUrl = process.env.BASE_API
// const baseUrl2 = window.g.ApiUrl
const api = {
  state: {
    // 实时控制台
    socketApi: baseUrl + '/websocket?token=kl',
    // 图片上传
    imagesUploadApi: baseUrl + '/api/pictures',
    // 修改头像
    // swagger
    swaggerApi: baseUrl + '/swagger-ui.html'
    // fileUploadApi: baseUrl2 + '/api/uploadFile/other' // 文件上传

  }
}

export default api
