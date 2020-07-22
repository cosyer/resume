$(function () {
  // 移动端连接跳转
  $("#Ilinks li").on("click", function () {
    window.open($(this).find("a").attr("href"));
  });
});
