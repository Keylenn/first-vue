<template>
	<div class="pagenav-container">
		<nav class="nav">
			<div class="usermes">
				<ul>
					<li><a href="#">xxx@163.com</a></li>
					<li><a href="#">退出</a></li>
					<li><a href="#">登录</a></li>
					<li><a href="#">注册</a></li>
					<li><a href="#">帮助中心</a></li>
				</ul>
			</div>
			<div class="top-up">
				<a href="#" title="网易充值中心"> </a>
			</div>
			<div class="tab">
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">充值购卡</a></li>
					<li><a href="#">积分商城</a></li>
					<li><a href="#">我的账户</a></li>
				</ul>
			</div>
		</nav>
	</div>
	
</template>
<script>
</script>
<style sc>
	.pagenav-container{
		width:1368px;
		height:84px;
		background:url('../../assets/header-bg.png');
		position:relative;
		z-index: 100;
		opacity:1;
		
	}

	.pagenav-container .usermes{
		min-width:500px;
		position:absolute;
		left:700px;
		top:-10px;		
	}
	.pagenav-container .usermes ul li{
		margin-right: 20px;
		padding-right: 20px;
		border-right: 1px solid #99917d;
		font-size:12px;
		float:left;
	}
	.pagenav-container .usermes ul li a{
		color:#99917d;
	}
	.pagenav-container .usermes ul li a:hover{
		color:#fff;
	}	
	.pagenav-container .usermes ul li:last-child{
		border-right: 0;
	}

	.pagenav-container .top-up{
		background: url('../../assets/logo.png') no-repeat;
		position:absolute;
		top:25px;
		left:80px;
	}
	.pagenav-container .top-up a{
		display:inline-block;
		min-width:170px;
		min-height: 32px;
	}
	
	.pagenav-container .tab{
		min-width:600px;
		position:absolute;
		top:15px;
		left:650px;		
	}
	.pagenav-container .tab ul li{
		float:left;
	}
	.pagenav-container .tab ul li a{
		width:120px;
		height: 40px;
		display:inline-block;
		color:#fff;
		text-align: center;
		line-height: 40px;
		margin-right: 5px;

	}
	.pagenav-container .tab ul li:first-child a{
		background-color:#d71637;
		border-radius: 5%;
		font-size:18px;		
	}
	.pagenav-container .tab ul li a:hover{
		background-color:#d71637;
		border-radius: 5%;
		font-size:18px;
	}	
</style>
