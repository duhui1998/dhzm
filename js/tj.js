var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?92658b22bc643eda74d393a8cac0734c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


// 留言提交
      $(function () {
          $('#check').click(function () {
              var name=$('#name').val();
              var tel=$('#tel').val();
              if(name ==  null || name == ''){
                  alert("姓名不能为空");
                  return false;
              };
              if(tel ==  null || tel == ''){
                  alert("电话号码不能为空");
                  return false;
              };
              if(!(/^1[34578]\d{9}$/.test(tel))){
                  alert("手机号码有误，请重填");
                  return false;
              }

          })
      })




// 分享
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];