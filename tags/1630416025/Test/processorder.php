<?php
session_start();
$TestCode2 = $_POST['TestCode2']; //获取用户从表单输入的验证码
$username=$_POST['username'];
$password=$_POST['password'];
//判断验证码是否正确，并执行相应的程序
if($_SESSION['TestCode'] != $TestCode2){
echo "<script>alert('验证码错?');history.back();</script>";
}else{
     if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
     	echo"<script>alert('您已登陆过了~');</script>";
     	header("location:index.php");
     }elseif(($username=="1630416025")&&($password=="123456")){
     	$_SESSION["username"]=$username;
     	echo"<script>alert('登陆成功');</script>";
     	header("location:index.php");
     }else{
     	echo"<script>alert('密码错误');history.back();</script>";
     }
}
     
 ?>
