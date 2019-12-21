// 懒人图库 搜集整理 www.lanrentuku.com

var flag=1;
$('#rightArrow').click(function(){
	if(flag==1){
		$("#floatDivBoxs").animate({right: '-175px'},300);
		$(this).animate({right: '-5px'},300);
		$(this).css('background-position','-50px 0');
		flag=0;
	}else{
		$("#floatDivBoxs").animate({right: '0'},300);
		$(this).animate({right: '170px'},300);
		$(this).css('background-position','0px 0');
		flag=1;
	}
});





// 分享
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},
"share":{}};with(document)0[
(getElementsByTagName('head')[0]||body).appendChild(createElement('script'))
.src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)
];




// 访问量
if(!localStorage.countAll){

localStorage.countAll = 0;
}
document.getElementById('countspan').innerHTML = localStorage.countAll;
function countNumber(){
localStorage.countAll++;
document.getElementById('countspan').innerHTML = localStorage.countAll;
}





