            var speed=30 
            marquePic2.innerHTML=marquePic1.innerHTML 
            function Marquee(){ 
            if(demo.scrollLeft>=marquePic1.scrollWidth){ demo.scrollLeft=0 }
			else{ demo.scrollLeft++ }} 
            var MyMar=setInterval(Marquee,speed) //设置定时器
           //鼠标移上时清除定时器达到滚动停止的目的
            demo.onmouseover=function() {clearInterval(MyMar)} 
           //鼠标移开时重设定时器
            demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 