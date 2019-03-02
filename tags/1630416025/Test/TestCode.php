<?php
	session_start(); //开启SEESION机制
	header('Content-type:image/png'); //定义当前页输出类型
	$TestCodeChars="1234567890"; //验证码字符集
	$TestCodeLen=6; //验证码长度
	$TestCode=""; //验证码字符串临时存储变量
	//随机生成指定长度的验证码字符串 
	for($i=0;$i<$TestCodeLen;$i++) { srand(); 
		$TestCode .= $TestCodeChars[ rand(0,strlen($TestCodeChars) -1) ]; }
	//判断验证码的SESSION全局变量是否定义过，如果定义过则清除先 前定义的验证码SESSION全局变量 
	if(isset($_SESSION['TestCode']))
		{unset($_SESSION['TestCode']); }
	//定义验证码的SESSION全局变量
	$_SESSION['TestCode'] = $TestCode;
	//$font  = "C:\WINDOWS\Fonts\Arial.ttf"; //字体类型 
	$font  = "ArialMT.ttf";
	$FontSize= 14; //字体大小 
	$angle = 10; //文字旋转角度
	$AddSize = 6;   // 字体间隔大小
	$x_size = $TestCodeLen*$FontSize+$AddSize; //图像宽度 
	$y_size = $FontSize+$AddSize; //图像高度
	$im = @imagecreatetruecolor($x_size, $y_size); //定义画布
	$white = imagecolorallocate($im, 255, 255, 255);//画布背景用白色 
	$red = imagecolorallocate($im, 255, 0, 0);//画布前景用红色
	//填充画布背景为白色 
	imagefilledrectangle($im, 0, 0, $x_size-1, $y_size-1, $white);
	//在画布上用红色，按照定义好的字体绘制验证码字符 
	for($i=0;$i<$TestCodeLen;$i++) { 
		imagettftext($im, $FontSize, $angle, $FontSize*$i+$AddSize, $FontSize+$AddSize/2, $red, $font, $TestCode[$i]); 
		}
	//在画布上用绘制随机的红色点【干扰项】 
	for($j=0;$j<50;$j++) 
		{imagesetpixel($im,rand(0,$x_size),rand(0,$y_size),$red);}
	imagepng($im); 
	//以png格式输出内存中图像 
	imagedestroy($im); //删除内存中图像数据集

?>