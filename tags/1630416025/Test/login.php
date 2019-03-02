<?php
session_start();
?>

<!DOCTYPE html>
<!--
	作者：李在涵
	时间：2018-11-5
	描述：生物信息网站
	本网站目前对谷歌浏览器兼容性最佳，请尽量使用谷歌浏览器打开
-->
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width", initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<title>生信之家——关于生信</title>
		<style type="text/css"></style>
		<script type="text/javascript" src="jquery.js"></script>
		<link href="mycss.css" type="text/css" rel="stylesheet" />
		<link href="../live2d/css/live2d.css" rel="stylesheet" />
		<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
		<script type="text/javascript">
			if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
			  alert('Pong友为什么你还在用IE? :)');
			}
		</script>
		
	</head>
	<body>
		<div id="content">
			<div id="form_login">
			<form action="processorder.php" method="post" target="_self">
				<p>用户名(1630416025)<br /><input type="text" style="width: 390px;height: 40px;" name="username"/></p>
				<p><br />密&nbsp;&nbsp;&nbsp;码(123456)<br />
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
		
	</body>
</html>
