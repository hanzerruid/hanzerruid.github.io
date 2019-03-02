				<!DOCTYPE html>
<!--
	作者：李在涵
	时间：2018-10-19
	描述：生物信息网站
	本网站目前对谷歌浏览器兼容性最佳，请尽量使用谷歌浏览器打开
-->
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width", initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<title>生信之家</title>
		<style type="text/css"></style>
		<script type="text/javascript" src="http://api.map.baidu.com/api?key=&v=1.4&services=true"></script>
		<link href="mycss.css" type="text/css" rel="stylesheet" />
		<link href="../live2d/css/live2d.css" rel="stylesheet" />
		<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
		
		<script type="text/javascript">
			if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
			  alert('建议使用谷歌浏览器~');
			}
		</script>
		
	</head>
	<body>
		<div id="top_content">
			<div id="topmenu">
				<div id="title_logo">
					<a id="logo" href="index.php">
						<img src="../image/logo.png" style="height: 40px;"/ >
					</a>
				<?php
				session_start();
				if (isset($_SESSION['username']) && !empty($_SESSION['username'])) {
				    echo "欢迎回来：".$_SESSION['username'];
				    echo '<a href="logout.php">注销</a>';
				    $forlogin=10;
				    $url_lianjie="ckeditor.php";
				}else{
				    echo "Welcome guest!";
				}
				?>
			 	<a href="shuoming.pdf">网页说明</a>
				</div>
				
				<!--
	            	作者：www.jb51.net 脚本之家
	            	描述：时钟
	            -->
				<span id="time">系统时间正在启动，请稍侯...</span>
			    <script type="text/javascript">
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
			    </script>
			    <!-- 时钟结束 -->
			    
				<div id="title_user">
					<a>
						<img id="user_image" src="../image/login.png" style="height: 40px;"/ >
					</a>
				</div>
				<div id="title_search">
					<a>
						<img id="search_image" src="../image/search.png" style="height: 40px;"/ >
					</a>
					
				</div>
				<div id="title_menu">
					<a>
						<img id="menu_image" src="../image/menu.png" style="height: 40px;"/ >
					</a>
				</div>
					<div id="menu">
						<ul>
							<li><a id="shengxin_menu" href="#viewport">关于生信</a></li>
			                <li><a id="yuyan_menu" href="#viewport">相关语言</a></li>
			                <li><a id="kecheng_menu" href="#viewport">相关课程</a></li>
			                <li><a id="lianjie_menu" href="#viewport">相关链接</a></li>
			                <li><a href="<?php echo $url_lianjie; ?>"  target="_blank">我要投稿</a></li>
			                <li><a href="mailto:916719797@qq.com">联系我们</a></li>
						</ul>
					</div>
				<div id="search">
					<div class="search bar1">
				        <form name=f id="searchinput"action=http://www.baidu.com/s target="_blank" class=fm
							onsubmit="javascript:F.call('ps/sug','pssubmit');">
				            <input type="text" class=s_ipt name=wd id=kw maxlength=100 
				            	placeholder="请输入您要搜索的内容...">
				            <button type="submit" style="width: 80px;">百度搜索</button>
				        </form>
				    </div>
				</div>
				<!--live2D-->
				<div id="landlord" style="left: 0px;top: 400px;">
			    <div class="message" style="opacity:0"></div>
			    <canvas id="live2d" width="500" height="560" class="live2d"></canvas>
			    <div class="live_talk_input_body">
			    	<div class="live_talk_input_name_body">
			        	<input name="name" type="text" class="live_talk_name white_input" id="AIuserName" 					autocomplete="off" 					placeholder="你的名字" />
			        </div>
			        <div class="live_talk_input_text_body">
			        	<input name="talk" type="text" class="live_talk_talk white_input" id="AIuserText" 					autocomplete="off" 					placeholder="要和我聊什么呀？"/>
			            <button type="button" class="live_talk_send_btn" id="talk_send">发送</button>
			        </div>
			    </div>
			    <input name="live_talk" id="live_talk" value="1" type="hidden" />
			    <div class="live_ico_box">
			    	<div class="live_ico_item type_info" id="showInfoBtn"></div>
			    	<div class="live_ico_item type_talk" id="showTalkBtn"></div>
			        <div class="live_ico_item type_music" id="musicButton"></div>
			        <div class="live_ico_item type_youdu" id="youduButton"></div>
			        <div class="live_ico_item type_quit" id="hideButton"></div>
			        <input name="live_statu_val" id="live_statu_val" value="0" type="hidden" />
			        <audio src="../music/fasterthanlight.ogg" style="display:none;" id="live2d_bgm" data-bgm="0" preload="none"></audio>
			        <input name="live2dBGM" value="../music/fasterthanlight.ogg" type="hidden">
			        <input id="duType" value="douqilai" type="hidden">
			    </div>
				</div>
				<div id="open_live2d">召唤助手</div>
				<!--
					live2D END  ( orz )
	            	作者：eeg1412
	            	地址：https://github.com/eeg1412/Live2dHistoire：
	            	金句源于API平台 一言网(Hitokoto.cn)，如有不正当言论与本人无关
	            -->
	            
			</div>
			
			<div id="content">
				<div id="form_login">
					<form action="processorder.php" method="post" target="_self">
						<p>用户名(1630416025)<br /><input type="text" style="width: 390px;height: 40px;" name="username"/></p>
						<p><br />密   码(123456)<br />
							<input type="text" style="width: 390px;height: 40px;" name="password"/>
						</p>
						<p><br /><label>
							验证码：<br /><input name='TestCode2' id='TestCode2' type="text" style="width: 300px;height: 40px;">
						<img src="TestCode.php"/><br />
						</label></p>
						<p><br /><br />
							<input type="submit" name="submit" style="width: 390px;height: 40px;" value="提交"/>
						</p>
	
				    </form>
				</div>
			</div>
		</div>
		
		<div id="footer">
			<p>1630416025    素材来源于网络
			<a id="map" href="#">在地图上找找看吧！</a>
			</p>
		</div>
		<script type="text/javascript">
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
		</script>
		
		<script type="text/javascript">
			$(document).ready(function(){
		  $("#yuyan_menu").click(function(){
		    $("#content").load("yuyan.html");
		    $(document).ajaxStop(function(){
				$("html, body").animate({
	      			scrollTop: $("#content_in_detail").offset().top }, {duration: 500,easing: "swing"});
			  	})
		  })
		})
		</script>
		
		<script type="text/javascript">
			$(document).ready(function(){
		  $("#kecheng_menu").click(function(){
		    $("#content").load("kecheng.html");
		    $(document).ajaxStop(function(){
				$("html, body").animate({
	      			scrollTop: $("#container").offset().top }, {duration: 500,easing: "swing"});
			  	})
		  })
		})
		</script>
		
		<script type="text/javascript">
			$(document).ready(function(){
		  $("#lianjie_menu").click(function(){
		  	var n=<?php echo $forlogin; ?>; 
		  	if(n==10){
		  		$("#content").load("lianjie.html");
		  	}
		  })
		})
		</script>
		
		<script type="text/javascript">
			$(document).ready(function(){
		  $("#map").click(function(){
		    $("#content").load("map.html");
		  })
		})
		</script>
		<script type="text/javascript">
			$(document).ready(function(){
		  	$("#user_image").click(function(){
				$("#form_login").animate({top:'130px',},10);
		  })
		})
		</script>
		
		<script type="text/javascript">
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
		</script>
		<script type="text/javascript">
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
		</script>
		
		<!--live2d js部分-->
		<script type="text/javascript" 			src="https://apps.bdimg.com/libs/jquery/1.7.1/jquery.min.js"></script>
		<script>
		var message_Path = '../live2d/';//资源目录，如果目录不对请更改
		var talkAPI = "";//如果有类似图灵机器人的聊天接口请填写接口路径
		</script>
		<script type="text/javascript" src="../live2d/js/live2d.js"></script>
		<script type="text/javascript" src="../live2d/js/message.js"></script>
		<!--live2d js结束-->
	</body>
</html>
			