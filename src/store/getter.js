const getters = {
  sidebar: state => state.app.sidebar, // 侧边栏
  //   device: state => state.app.device,
  //   token: state => state.user.token, // token
  //   visitedViews: state => state.tagsView.visitedViews,
  //   cachedViews: state => state.tagsView.cachedViews,
  // roles: state => state.user.roles,
  // user: state => state.user.user, // 获取用户
  // loadMenus: state => state.user.loadMenus // 菜单
  //   permission_routers: state => state.permission.routers,
  //   addRouters: state => state.permission.addRouters,
  //   socketApi: state => state.api.socketApi,
  imagesUploadApi: state => state.api.imagesUploadApi
//   updateAvatarApi: state => state.api.updateAvatarApi,
//   qiNiuUploadApi: state => state.api.qiNiuUploadApi,
//   fileUploadApi: state => state.api.fileUploadApi,
//   sqlApi: state => state.api.sqlApi,
//   swaggerApi: state => state.api.swaggerApi,
//   show: state => state.loginVerify.show,
//   salaryUploadApi: state => state.api.salaryUploadApi,
//   salaryUploadApi2: state => state.api.salaryUploadApi2
}
export default getters
