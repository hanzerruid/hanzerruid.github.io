<html>
	<head>
		<meta charset="UTF-8">
		<script type="text/javascript" src="../ckeditor/ckeditor.js"></script>
		<script src="../jquery-1.11.0.min.js"></script>	
		<title>在线编辑</title>
	</head>
	<body>
		<form method="post" action="server.php">
			<?php
				$file = "yuyan1.html";
				if(file_exists($file))
				{
				   $filename = "yuyan1.html";
				}
				else
				{
				   $filename = "yuyan.html";
				}
				echo "当前目录：";
				echo $filename;
				echo "<br />";
				echo "点击保存实现代码保存到yuyan1.html，可输入你希望实现的新功能后点击左下角的 提交 上传到MySQL上。(注意，文本中不能出现单引号)";
			    $file = fopen($filename, "r");//读取二进制文件时，需要将第二个参数设置成'rb'
			    //通过filesize获得文件大小，将整个文件一下子读到一个字符串中
			 	$content=fread($file, filesize ($filename));
			    fclose($file);
			?>
			<textarea id="content" name="content" cols="20" rows="2" class="ckeditor">
				<?php echo $content; ?>
			</textarea>
			<input type="submit" value="提交到MySQL" style="width:200px;height: 28px;">
		</form>
		<script type="text/javascript">

	        var editor=CKEDITOR.replace( 'content',{
	          allowedContent:true
	      	});
			editor.on("instanceReady", function (evt) {
		     	editor.addCommand("save", { modes: {wysiwyg:1, source:1}, exec: function (editor) {
		    
		        	var content =CKEDITOR.instances['content'].getData();
		        	$("#form").serialize();
		        	$.ajax({
						type: "POST",
		             	url: "readfile.php",
						data:{
							main:content
						},
		             	success: function(resultData){
		                	alert("保存成功");
						}
		        	});
		     	}});
		     	
	      	});
	
			</script> 
			
	</body>
</html>
