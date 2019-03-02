
		    window.onload = function(){
		      showTime();
		    }
		    function showTime(){
			    var myDate = new Date();
			    var year = myDate.getFullYear();var month = myDate.getMonth() + 1;var date = myDate.getDate();
			    var day1 = myDate.getDay();
			    var hour = myDate.getHours();var minute = myDate.getMinutes();var second = myDate.getSeconds();
			    var min = checkTime(minute);var sec = checkTime(second);
			    var time1 = year + "年" + month + "月" + date + "日 ";var time2 = hour + ":" + min + ":" + sec;
			    $('#time').text(time1+time2);
			    setTimeout("showTime()",500);
		    }
		    function checkTime(i){
		      if(i<10){
		        i = "0" + i;
		      }
		      return i;
		    }
		    
		    $(document).ready(function(){
		  $("#shengxin_menu").click(function(){
		  	var num=4;
		    $("#content").load("shengxin.html");
		    $(document).ajaxStop(function(){
				$("html, body").animate({
	      			scrollTop: $("#content_in_detail").offset().top }, {duration: 500,easing: "swing"});
			  	})
			});
		    
		})
		    
$(document).ready(function(){
		  $("#yuyan_menu").click(function(){
		    $("#content").load("yuyan.html");
		    $(document).ajaxStop(function(){
				$("html, body").animate({
	      			scrollTop: $("#content_in_detail").offset().top }, {duration: 500,easing: "swing"});
			  	})
		  })
		})

$(document).ready(function(){
		  $("#kecheng_menu").click(function(){
		    $("#content").load("kecheng.html");
		    $(document).ajaxStop(function(){
				$("html, body").animate({
	      			scrollTop: $("#container").offset().top }, {duration: 500,easing: "swing"});
			  	})
		  })
		})

$(document).ready(function(){
		  $("#lianjie_menu").click(function(){
		  	var n=<?php echo $forlogin; ?>; 
		  	if(n==10){
		  		$("#content").load("lianjie.html");
		  	}
		  })
		})

$(document).ready(function(){
		  $("#user_image").click(function(){
		  		$("#content").load("login.php");
		  })
		})

$(document).ready(function(){
		  $("#map").click(function(){
		    $("#content").load("map.html");
		  })
		})

$(document).ready(function(){
				time0=0;
				$("#menu_image").click(function(){
					if(time0==0){
						$("#menu").animate({top:'-40px',},10);
						$("#menu").animate({right:'40px',opacity:'1',});
						time0=1;
					}
					else{
						$("#menu").animate({right:'10px',opacity:'0',});
						$("#menu").animate({top:'-100px',},10);
						time0=0;
					}
				});
				
			});
			
$(document).ready(function(){
				time1=0;
				$("#search_image").click(function(){
					if(time1==0){
						$("#searchinput").animate({top:'0px'},10);
						$("#searchinput").animate({opacity:'1',top:'20px'});
						time1=1;
					}
					else{
						$("#searchinput").animate({opacity:'0',top:'0px',});
						$("#searchinput").animate({top:'-120px'},10);
						time1=0;
					}
				});
				
			});
			
var message_Path = '../live2d/';//资源目录，如果目录不对请更改
		var talkAPI = "";//如果有类似图灵机器人的聊天接口请填写接口路径