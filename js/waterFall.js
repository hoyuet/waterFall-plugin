(function($){
	$.fn.waterFall=function(minLiH,maxLiH){
	minLiH=minLiH||200;
	maxLiH=maxLiH||400;
	$('.waterFall ul').css({
		width:(($('.waterFall').width()-30)/$('.waterFall ul').length)/$('.waterFall').width()*100-0.5+'%',
		margin:'0 0.5%'
	});
	var aTmp=$('.waterFall ul');
	var aUl=[];
	var n=0;	//加载次数
	var m=0;
	var max=10;
	var arrImg=['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'
				,'10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg'
				,'20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg'
				,'30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg'
				,'40.jpg'];
	for(var i=0;i<aTmp.length;i++)
	{
		aUl.push(aTmp[i]);
			
	}
	//[ul1,ul2,ul3]
	addLi();
	createLi();
	$('.waterFall').scroll(function(){
		var clientHeight=$('.waterFall').height();//可视区高度
		var scrollTop=$('.waterFall').scrollTop();//获取匹配元素相对滚动条顶部的偏移。
		var height=$('.waterFall ul').eq(0).height();//文档高度
		if(height<=clientHeight+scrollTop){createLi();}
	});

	function rnd(n,m)
	{
		return Math.floor(Math.random()*(m-n)+n);	
	}
	function createLi()
	{	
		n++;
		if(n>max)
		{
			return;	
		}
		addLi();
	}
	function addLi()
	{
		for(var i=0;i<5;i++){
			if(arrImg.length==(5*n+i)){
				n=max;
				break;
			}else{
				 var oLi=document.createElement('li');
				 oLi.style.height=rnd(minLiH,maxLiH)+'px';
				//比较高度
				aUl.sort(function(ul1,ul2){//给aUl数组从小到大排序
					return ul1.offsetHeight-ul2.offsetHeight;	
				});	
				//在li中显示编号
				 // oLi.innerHTML=i+m;
				//在li标签中添加图片
				var oImg=new Image();
				oImg.src='img/'+(i+m)+'.jpg';
				oLi.appendChild(oImg);
				aUl[0].appendChild(oLi);
			}
			
		}
		m+=i;
	}
	}
})(jQuery);