/* 沙箱模式 */
/* 沙箱模式 */
//     //token 令牌告诉服务器，当前是哪个用户要访问我数据
//     //Authorization 翻译是授权的意思，值就为我们的token
(function(window) {
  const token = localStorage.getItem("token");
  //   ajaxSetup() 方法为将来的 AJAX 请求设置默认值。
  $.ajaxSetup({
    beforeSend(xhr) {
      if (!token) {
        location.href = "./login.html";
      }
      if (location.href.indexOf("login.html") === -1) {
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
  const baseUrl = "http://localhost:8080/api/v1";
  var newUrl = {
    user_login: baseUrl + "/admin/user/login", //用户登录
    user_info: baseUrl + "/admin/user/info", //用户信息
    user_detail: baseUrl + "/admin/user/detail", //用户详情
    user_edit: baseURL + "/admin/user/edit", //用户编辑
    category_list: baseURL + "/admin/category/list", //文章类别查询
    category_add: baseURL + "/admin/category/add", //文章类别新增
    category_search: baseURL + "/admin/category/search", //文章类别搜索
    category_edit: baseURL + "/admin/category/edit", //文章类别编辑
    category_delete: baseURL + "/admin/category/delete", //文章类别删除
    article_query: baseURL + "/admin/article/query", //文章搜索
    article_publish: baseURL + "/admin/article/publish", //文章发布
    article_search: baseURL + "/admin/article/search", //文章信息查询
    article_edit: baseURL + "/admin/article/edit", //文章编辑
    article_delete: baseURL + "/admin/article/delete", //文章删除
    comment_list: baseURL + "/admin/comment/search", //文章评论列表
    comment_pass: baseURL + "/admin/comment/pass", //文章评论通过
    comment_reject: baseURL + "/admin/comment/reject", //文章评论不通过
    comment_delete: baseURL + "/admin/comment/delete" //文章评论删除
  };
  window.newUrl = newUrl;
})(window);

/* (function(w){
    var baseURL = 'http://localhost:8080/api/v1'
    var BigNew = {
        baseURL:baseURL,//基地址
        user_login:      baseURL + '/admin/user/login',//用户登录
        user_info:       baseURL + '/admin/user/info',//用户信息
        user_detail:     baseURL + '/admin/user/detail',//用户详情
        user_edit:       baseURL + '/admin/user/edit',//用户编辑
        category_list:   baseURL + '/admin/category/list',//文章类别查询
        category_add:    baseURL + '/admin/category/add',//文章类别新增
        category_search: baseURL + '/admin/category/search',//文章类别搜索
        category_edit:   baseURL + '/admin/category/edit',//文章类别编辑
        category_delete: baseURL + '/admin/category/delete',//文章类别删除
        article_query:   baseURL + '/admin/article/query',//文章搜索
        article_publish: baseURL + '/admin/article/publish',//文章发布
        article_search:  baseURL + '/admin/article/search',//文章信息查询
        article_edit:    baseURL + '/admin/article/edit',//文章编辑
        article_delete:  baseURL + '/admin/article/delete',//文章删除
        comment_list:    baseURL + '/admin/comment/search',//文章评论列表
        comment_pass:    baseURL + '/admin/comment/pass',//文章评论通过
        comment_reject:  baseURL + '/admin/comment/reject',//文章评论不通过
        comment_delete:  baseURL + '/admin/comment/delete',//文章评论删除
    };

    //暴露接口
    w.BigNew = BigNew;
})(window); */
