$(function() {
  //1.页面一加载：ajax请求个人详情信息，渲染页面
  $.ajax({
    type: "get",
    url: newUrl.user_detail,
    success: function(response) {
      // $('[name="username"]').val(response.data.username);
      // $('[name="nickname"]').val(response.data.nickname);
      // $('[name="email"]').val(response.data.email);
      // $(".user_pic").attr("src", response.data.userPic);
      // $('[name="password"]').val(response.data.password);
      const data = response.data;
      const code = response.code;
      if (code === 200) {
        $.each(data, function(key, value) {
          if (key !== "userPic") {
            $(`[name='${key}']`).val(value);
          }
          // console.log(key, value);
        });
        $(".user_pic").attr("src", data.userPic);
      }
      // console.log(response);
    }
  });
  //2.文件预览
  let url;
  // 固定的四个步骤
  $("#exampleInputFile").change(function() {
    const file = this.files[0];
    // console.dir(file);
    url = URL.createObjectURL(file);
    // console.log(url);

    $(".user_pic").attr("src", url);
  });
  // 3.编辑用户信息
  $("#form").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: newUrl.user_edit,
      dataType: "json",
      data: new FormData(this),
      contentType: false,
      processData: false,
      success: function(response) {
        // console.log(response);
        // window.parent.location.reload();
        parent.$(".user_info img,.user_center_link img").attr("src", url);
        parent.$(".user_info span").html("欢迎:" + nickname);
      }
    });
  });
});
