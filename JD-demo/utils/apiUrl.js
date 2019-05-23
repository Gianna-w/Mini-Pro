const baseUrl = "https://enigmatic-island-47099.herokuapp.com";
const apiUrl = {
  //首页
  homepage: baseUrl + "/api/profiles/homepage",
  //分类
  productions: baseUrl + "/api/profiles/productions",
  //列表
  productionsList: baseUrl + "/api/profiles/productionsList",
  //详情
  productionDetail: baseUrl + "/api/profiles/productionDetail",
}
module.exports = apiUrl