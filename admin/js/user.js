$(function() {
  //1.页面一加载：ajax请求个人详情信息，渲染页面
  $.ajax({
    type: "get",
    url: newUrl.user_detail,
    success: function(response) {
      const userName = $("#inputEmail1").val(response.data.username);
      const nickName = $("#inputEmail2").val(response.data.nickname);
      const email = $("#inputEmail3").val(response.data.email);
      const userPic = $(".user_pic").attr("src", response.data.userPic);
      const passWord = $("#inputEmail4").val(response.data.password);
      console.log(response);
    }
  });
  //2.文件预览

  // 固定的四个步骤
  $("#exampleInputFile").change(function() {
    var file = this.files[0];
    var url = URL.createObjectURL(file);
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
        console.log(response);
        window.parent.location.reload();
      }
    });
  });
});
