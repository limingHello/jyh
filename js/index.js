;$(function(){
	var index=0
	$(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
	var L=$(".navXiao li").length;
	setInterval(change,2000);
	
	function change(){
		index++;
		if(index==L){
			index=0
		}
		$(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
		$(".navXiao li").eq(index).addClass("active").siblings().removeClass("active");	
	}
});
