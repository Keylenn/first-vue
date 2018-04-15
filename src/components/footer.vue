<template>
	<div id="footer">
		<section class="f-help">
			<article class="problem">
					<dl>
						<dt>常见问题<icon class="icon" name="question-circle"></icon></dt>
						<dd><a href="#">一卡通可以消费哪些产品？</a></dd>
						<dd><a href="#">如何充值通用点数</a></dd>
						<dd><a href="#">怎么使用手机购卡充值？</a></dd>
						<dd><a href="#">什么是产品专用点数？</a></dd>
						<dd><a href="#">怎么进行在线购卡</a></dd>
						<dd><a href="#">其他问题</a></dd>
					</dl>
			</article>
			<article class="serve">
				<dl>
					<dt>充值服务<icon class="icon" name="phone-square"></icon></dt>
					<dd>客服电话(免长途通话费): <a href="#">400-800-0163</a></dd>
					<dd>客服中心: <a href="#">http://ecard.gm.163.com</a></dd>
				</dl>
			</article>
		</section>
		<section class="f-copyright">
			<article class="logo">
				<img src="../assets/footer_logo_1.png" alt="">
				<img src="../assets/footer_logo_2.png" alt="">
			</article>
			<article class="about">
				<ul>
					<li><a href="#">公司简介 - </a></li>
					<li><a href="#">客户服务 - </a></li>
					<li><a href="#">相关法律 - </a></li>
					<li><a href="#">网易游戏 - </a></li>
					<li><a href="#">联系我们 - </a></li>
					<li><a href="#">商务合作 - </a></li>
					<li><a href="#">加入我们</a></li>
				</ul>
				<p>网易公司版权所有©1997 粤网文[2014]0636-236号</p>
			</article>
		</section>
	</div>
</template>
<script>
	import 'vue-awesome/icons'
	import Icon from 'vue-awesome/components/Icon'
	export default{
		components: {
        	Icon
    	}
    }
</script>
<style>
	#footer{
		width:1368px;
		/*height: 200px;*/
		background-color: #f3f3f3;
		border-left: 5px solid #d71637;
		overflow: hidden;
	}
	#footer .f-help{
		width:840px;
		height: 150px;
		margin-left: 250px;
		border-bottom: 0.2px solid #d0d0d0;
	}
	#footer .f-help dl dt{
		font-weight:bold;
	}
	#footer .f-help dl dt .icon{
		color:#666;
		margin-left:10px;
		vertical-align: -5%;
	}
	#footer .f-help .problem{
		width:500px;
		float:left;
	}
	#footer .f-help .problem dl dd{
		display:inline-block;
		margin-top:10px;
	}
	#footer .f-help .problem dl dd:nth-child(5){
		margin-left:55px;
	}
	#footer .f-help .problem dl dd:nth-child(7){
		margin-left:102px;
	}
	#footer .f-help .problem dl dd:nth-child(7) a{
		color:#d71637;
	}
	#footer .f-help .serve {
		overflow:hidden;
	}
	#footer .f-help .serve dl dt .icon{
		vertical-align: -8%;
	}
	#footer .f-help .serve dl dd{
		color:#666;
		margin-top:10px;
		font-weight:bold;
	}
	#footer .f-help .serve dl dd a{
		color:#666;
		font-weight:normal;
	}

	#footer .f-copyright{
		margin-left: 280px;
	}
	#footer .f-copyright .logo{
		float:left;
	}
	#footer .f-copyright .about{
		margin-left: 250px;
	}
	#footer .f-copyright .about ul li{
		display:inline-block;
	}
	#footer .f-copyright .about ul li a{
		font-size: 14px;
	}#footer .f-copyright .about p{
		color:#666;
		font-size: 14px;
		margin-left: 100px;
		margin-top: -10px;
	}
</style>