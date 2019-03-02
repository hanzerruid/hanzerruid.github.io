-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2019-01-09 15:08:48
-- 服务器版本： 10.1.36-MariaDB
-- PHP 版本： 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `web`
--

-- --------------------------------------------------------

--
-- 表的结构 `content`
--

CREATE TABLE `content` (
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `content`
--

INSERT INTO `content` (`content`) VALUES
('当前目录：index_for_show.php<br />\r\n点击保存实现代码保存，可新建文档输入你希望实现的新功能后点击左下角的 提交 上传到MySQL上。(注意，文本中不能出现单引号)'),
('				<!DOCTYPE html>\r\n<!--\r\n	作者：李在涵\r\n	时间：2018-11-5\r\n	描述：生物信息网站\r\n	本网站目前对谷歌浏览器兼容性最佳，请尽量使用谷歌浏览器打开\r\n-->\r\n<html>\r\n	\r\n	<body>\r\n		<div id=\"content\">\r\n			\r\n			<div id=\"Banner\">\r\n				<!--实现 左右按钮，1234，自动滑动，鼠标停上显示小手不动 暂停。-->\r\n		        <section id=\"banner\" onmouseover=\"changeStop()\" onmouseout=\"changeStart()\">\r\n		            <!--以下是我们的banner图-->\r\n		            <div id=\"bannerImg\">\r\n		                <img class=\"img\" src=\"../image/bioinformatics1.jpg\"/>\r\n		                <img class=\"img\" src=\"../image/bioinformatics2.jpg\"/>\r\n		                <img class=\"img\" src=\"../image/bioinformatics3.jpg\"/>\r\n		                <img class=\"img\" src=\"../image/bioinformatics4.jpg\"/>\r\n		                <img class=\"img\" src=\"../image/bioinformatics1.jpg\"/><!--第7张与第一张为同一图片，消除图片切换间断-->\r\n		            </div>\r\n		            \r\n		            <!--以下是我们左下方的banner图按钮-->\r\n		            <div id=\"bannerButton\">\r\n		                <button class=\"Button\" onclick=\"buttonChange(0)\">1</button>\r\n		                <button class=\"Button\" onclick=\"buttonChange(1)\">2</button>\r\n		                <button class=\"Button\" onclick=\"buttonChange(2)\">3</button>\r\n		                <button class=\"Button\" onclick=\"buttonChange(3)\">4</button>\r\n		            </div>\r\n		            \r\n		            <!--以下是我们左右两个方向按钮-->\r\n		            <div id=\"bannerButtonAside\">\r\n		                <div class=\"div1\" onclick=\"asideChange(1)\">\r\n		                    <img src=\"../image/next.png\" style=\"width: 30px;\"/>\r\n		                </div>\r\n		                <div class=\"div2\" onclick=\"asideChange(0)\">\r\n		                    <img src=\"../image/back.png\" style=\"width: 30px;\"/>\r\n		                </div>\r\n		            </div>\r\n		        </section>\r\n			</div>\r\n			\r\n			<div id=\"container\">\r\n				\r\n				<div id=\"content_in_detail\">\r\n					<br />\r\n					<div style=\"position: absolute;left: 35%;\">\r\n						<h2 >\r\n							在生物信息学习过程中，我们主要涉及以下几种语言\r\n						</h2>\r\n					</div>\r\n						<br /><br /><br />\r\n					<details>\r\n						<summary>\r\n							R语言<br />\r\n						</summary>\r\n						<p><br />\r\n							R是用于统计分析、绘图的语言和操作环境。是一个用于统计计算和统计制图的优秀工具。\r\n							在生物信息学领域有着很大的应用。<br />\r\n							Bioconductor是建立在R语言环境上的，用于生物信息数据的注释，处理，分析及可视化工具包的总集。\r\n							由一系列的R扩展包组成。当前主要是应用在基因芯片和NGS测序数据分析两个领域。<br />\r\n						</p>\r\n						<div id=\"img_in_content\">\r\n							<a href=\"http://www.bioconductor.org/\" target=\"_blank\">\r\n								<img src=\"../image/bioconductor.jpg\"/>\r\n							</a>\r\n						</div>\r\n					</details>\r\n					<br /><br /><br />\r\n					<details>\r\n						<summary>\r\n							Java语言<br />\r\n						</summary>\r\n						<p><br />\r\n							Java是现阶段最为流行的语言之一，以其良好的封装性和可实现性著称。现阶段移动端app多由Java编写。<br />\r\n						</p>\r\n						<div id=\"img_in_content\">\r\n							<a href=\"https://www.oracle.com/\" target=\"_blank\">\r\n								<img src=\"../image/java_tea.jpg\"/>\r\n							</a>\r\n						</div>\r\n							\r\n					</details>\r\n					<br /><br /><br />\r\n					<details>\r\n						<summary>\r\n							Perl语言<br />\r\n						</summary>\r\n						<p><br />\r\n							Perl语言是一个功能十分丰富的编程语言，可以比较方便的进行大规模信息处理的编程语言，许多生物信息相关任务都由Perl语言完成。<br />\r\n						</p>\r\n						<div id=\"img_in_content\">\r\n							<a href=\"https://www.oracle.com/\" target=\"_blank\">\r\n								<img src=\"../image/Perl_book.jpg\"/>\r\n							</a>\r\n						</div>\r\n							\r\n					</details>\r\n					<br /><br /><br />\r\n					\r\n					<details>\r\n						<summary>\r\n							SQL语言<br />\r\n						</summary>\r\n						<p><br />\r\n							SQL语言，即结构化查询语言。SQL是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统。<br />\r\n						</p>\r\n						<div id=\"img_in_content\">\r\n							<a href=\"http://www.w3school.com.cn/sql/index.asp\" target=\"_blank\">\r\n								<img src=\"../image/sql.jpg\"/>\r\n							</a>\r\n						</div>\r\n					</details>\r\n					<br /><br /><br />\r\n					\r\n					<details>\r\n						<summary id=\"web\">\r\n							web前端开发语言<br />\r\n						</summary>\r\n						<p><br />\r\n							网站使用HTML、CSS、Javascript这三种开发语言制作而成。HTML用于将文本传输在网上，CSS用于修饰网页，Javascript用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。<br />\r\n						</p>\r\n						<div id=\"img_in_content\">\r\n							<a href=\"http://www.w3school.com.cn/h.asp\" target=\"_blank\">\r\n								<img src=\"../image/html_js.jpg\"/>\r\n							</a>\r\n						</div>\r\n							\r\n					</details>\r\n					<br /><br /><br />\r\n				</div>\r\n				\r\n			</div>\r\n			\r\n		</div>\r\n		\r\n		\r\n		<script type=\"text/javascript\">\r\n	        var bannerImg=document.getElementById(\"bannerImg\");    /*取出img容器的节点*/\r\n	        var Button=document.getElementsByClassName(\"Button\");    /*取出所有的button按钮*/\r\n	        var num=0;     /*定义全局变量num,控制banner的切换次序*/\r\n	        var aaa=0;     /*定义一个全局变量,用来取定时器函数,并在没有鼠标事件的时候清除定时器*/\r\n	            \r\n	        /*通过定时器实现banner图的每3000毫秒切换一次的效果的changeStart()函数*/\r\n	        function changeStart(){\r\n	                aaa=setInterval(function(){\r\n	                if (num<=4) {\r\n	                    bannerImg.style.transition=\"all 1s linear\";\r\n	                    bannerImg.style.left=(-1000)*(num)+\"px\";\r\n	                    num++;\r\n	                }else{\r\n	                    bannerImg.style.transition=\"all 0s linear\";        /*消除num=0时,bannerImg移动的过渡效果*/\r\n	                    num=0;\r\n	                    bannerImg.style.left=(-1000)*(num)+\"px\";\r\n	                    \r\n	                }\r\n	            },3000)\r\n	        }\r\n	        changeStart();\r\n	        \r\n	        /*以下是当鼠标悬浮在banner图上时,图片停止自动切换的changeStop()函数*/\r\n	        function changeStop(){\r\n	            clearInterval(aaa);    \r\n	            console.log(\"停止他\");\r\n	        }\r\n	        \r\n	        /*以下是点击按钮实现对应banner图切换的change()函数*/\r\n	        function buttonChange(Num){\r\n	            num=Num+1;\r\n	            bannerImg.style.transition=\"all 0s linear\";\r\n	            bannerImg.style.left=(-1000)*(Num)+\"px\";\r\n	        }\r\n	        \r\n	        /*以下是点击左右两个按钮实现banner图切换的buttonChange()函数*/\r\n	        function asideChange(x){   /*通过传递形参x,判断往左/往右切换banner图*/\r\n	            if (num!=4&&x==1) {\r\n	                num++;\r\n	            }else if(num==4&&x==1){\r\n	                num=0;\r\n	            }else if(num!=0&&x==0){\r\n	                num--;\r\n	            }\r\n	            else if(num==0&&x==0){\r\n	                num=3;\r\n	            }\r\n	            bannerImg.style.transition=\"all 0s linear\";\r\n	            bannerImg.style.left=(-1000)*(num)+\"px\";\r\n	        }\r\n	    </script>\r\n	\r\n	</body>\r\n</html>\r\n			'),
('这是一个测试用的mysql');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
