
<?php
	$mycontent=$_POST['content'];
    $dbhost = 'localhost:3306';  // mysql服务器主机地址
	$dbuser = 'root';            // mysql用户名
	$dbpass = '';          // mysql用户名密码
	$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
	if(! $conn )
	{
	  die('连接失败: ' . mysqli_error($conn));
	}
	// 设置编码，防止中文乱码
	mysqli_query($conn , "set names utf8");
	 
	$sql = "INSERT INTO content ".
	        "(content) ".
	        "VALUES ".
	        "('$mycontent')";
	 
	 
	 
	mysqli_select_db( $conn, 'web' );
	$retval = mysqli_query( $conn, $sql );
	if(! $retval )
	{
	  die('无法插入数据: ' . mysqli_error($conn));
	}
	echo "<script>alert('数据插入成功')</script>";
	mysqli_close($conn);
	
	header("Refresh:1;url=index.php");
?>