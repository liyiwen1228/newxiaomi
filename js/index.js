/*
* @Author: Administrator
* @Date:   2018-05-05 17:03:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 17:39:07
*/
window.onload=function(){

	let select=document.querySelectorAll(".jiadian:first-child .j_top .j_top_r>li");
	 // alert(select.length);
	let uarr=document.querySelectorAll(".jiadian:first-child .j_center .j_center_r");
	let select1=document.querySelectorAll(".jiadian:nth-child(2) .j_top .j_top_r>li");
	let uarr1=document.querySelectorAll(".jiadian:nth-child(2) .j_center .j_center_r");
	let select2=document.querySelectorAll(".jiadian:nth-child(3) .j_top .j_top_r>li");
	let uarr2=document.querySelectorAll(".jiadian:nth-child(3) .j_center .j_center_r");
	let select3=document.querySelectorAll(".jiadian:nth-child(4) .j_top .j_top_r>li");
	let uarr3=document.querySelectorAll(".jiadian:nth-child(4) .j_center .j_center_r");
	let select4=document.querySelectorAll(".jiadian:nth-child(5) .j_top .j_top_r>li");
	let uarr4=document.querySelectorAll(".jiadian:nth-child(5) .j_center .j_center_r");
	console.log(select2,uarr2);
	table(select,uarr);
	table(select1,uarr1);
	table(select2,uarr2);
	table(select3,uarr3);
	table(select4,uarr4);
	function table(select,uarr){
		select[0].classList.add("active");
		uarr[0].style.display="block";
		for(let i=0;i<select.length;i++){		
			select[i].onmouseover=function(){
				for(let j=0;j<select.length;j++){
					uarr[j].style.display="none";
					select[j].classList.remove("active");
				}
				uarr[i].style.display="block";
				select[i].classList.add("active");
			}
		}
	}
	let nav_c_ul=document.querySelector(".nav_c_ul");
	let nav_menu=document.querySelector(".nav_menu");
	let containers=document.querySelectorAll(".container");
	let nav_c_ul_lis=document.querySelectorAll(".nav_c_ul>li");
	// console.log(nav_c_ul_lis);		
	for(let i=0;i<containers.length;i++){
		nav_c_ul_lis[i].onmouseover=function(){
			for(let j=0;j<containers.length;j++){
				containers[j].style.display="none";
				// containers[j].style.height="0";
			}
			containers[i].style.display="block";
			// containers[i].style.height="230px";
		}
	}
	for(let i=0;i<containers.length;i++){
		nav_c_ul_lis[i].onmouseout=function(){
			containers[i].style.display="none";
			// containers[i].style.height="0";
		}
	}
	//内容轮播
	//图书
	let con_prev1=document.querySelector(".con_center>li.item1 .prev");
	let con_next1=document.querySelector(".con_center>li.item1 .next");
	let item_list1=document.querySelector(".con_center>li.item1 .item_list");
	let btn1s=document.querySelectorAll(".btn1>ul>li");
	let btn1s_span=document.querySelectorAll(".btn1>ul span");
	//MUI主题
	let con_prev2=document.querySelector(".con_center>li.item2 .prev");
	let con_next2=document.querySelector(".con_center>li.item2 .next");
	let item_list2=document.querySelector(".con_center>li.item2 .item_list");
	let btn2s=document.querySelectorAll(".btn2>ul>li");
	let btn2s_span=document.querySelectorAll(".btn2>ul span");
	//游戏
	let con_prev3=document.querySelector(".con_center>li.item3 .prev");
	let con_next3=document.querySelector(".con_center>li.item3 .next");
	let item_list3=document.querySelector(".con_center>li.item3 .item_list");
	let btn3s=document.querySelectorAll(".btn3>ul>li");
	let btn3s_span=document.querySelectorAll(".btn3>ul span");
	//应用
	let con_prev4=document.querySelector(".con_center>li.item4 .prev");
	let con_next4=document.querySelector(".con_center>li.item4 .next");
	let item_list4=document.querySelector(".con_center>li.item4 .item_list");
	let btn4s=document.querySelectorAll(".btn4>ul>li");
	let btn4s_span=document.querySelectorAll(".btn4>ul span");
	Banner_l_r(con_prev4,con_next4,item_list4,btn4s,btn4s_span);
	Banner_l_r(con_prev3,con_next3,item_list3,btn3s,btn3s_span);
	Banner_l_r(con_prev1,con_next1,item_list1,btn1s,btn1s_span);
	Banner_l_r(con_prev2,con_next2,item_list2,btn2s,btn2s_span);
	
	// console.log(btn1s_span);

	//倒计时
	let hour_span=document.querySelector(".hour>span");
	let down_time=document.querySelectorAll(".countdown .box");
	//执行倒计时函数
	Down_time(hour_span,down_time);

	//轮播图
	//1.获取元素
	//图片
	let oImg=document.querySelectorAll(".b_r img");
	//轮播点
	let oDot=document.querySelectorAll(".circle span");
	//包含图片的块
	let oBanner=document.querySelector(".b_r");
	//prev按钮
	let ban_prev=document.querySelector(".b_prev");
	//next按钮
	let ban_next=document.querySelector(".b_next");
	//执行轮播函数--透明度轮播
	Banner_op(oImg,oDot,oBanner,ban_prev,ban_next,"active");

	//闪购轮播
	let f_box=document.querySelector(".mi_flash .m_center_box");
	let flash=document.querySelector(".mi_flash .m_center");
	let m_next=document.querySelector(".m_top_r .m_next");
	let m_prev=document.querySelector(".m_top_r .m_prev");
	console.log(m_next);
	let f_width=parseInt(getComputedStyle(f_box,null).width);
	banner_on(f_box,flash,m_next,m_prev,f_width,2);

	//为你推荐轮播
	let se_box=document.querySelector(".sell .se_center_box");
	console.log(se_box);
	let sell=document.querySelector(".sell .se_center");
	let se_next=document.querySelector(".sell .se_next");
	let se_prev=document.querySelector(".sell .se_prev");
	console.log(m_next);
	let se_width=parseInt(getComputedStyle(se_box,null).width);
	
	banner_on(se_box,sell,se_next,se_prev,se_width,4);

	//回到顶部
	let backTop=document.querySelector(".backTop");
	backTop.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
	window.onscroll=function(){
		let btop=document.body.scrollTop||document.documentElement.scrollTop;
		if(btop>400){
			backTop.style.display="block";
		}
		if(btop<400){
			backTop.style.display="none";
		}
	}
}
