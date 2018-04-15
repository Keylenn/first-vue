<template>
	<div class="banner">
		<div class="news">
			<div class="news-content">
				<h2>最新消息<span>查看更多</span></h2>
				<h3>大神回归六重大奖连环赏六重，大神回国</h3>
				<ul>
					<li><a href="#">在线购卡价格调整公告</a></li>
					<li><a href="#">大话2经典版，免费版充值送大礼</a></li>
					<li><a href="#">1月10日23点-1月11日7点工商银行</a></li>
					<li><a href="#">在线购卡价格调整公告</a></li>
					<li><a href="#">大话2经典版，免费版充值送大礼</a></li>
					<li><a href="#">1月10日23点-1月11日7点工商银行</a></li>
				</ul>
				<icon class="back" name="angle-double-left"></icon>	
			</div>
		</div>
		<icon class="go" name="angle-double-right"></icon>	
	</div>
</template>
<script>
	import 'vue-awesome/icons'
	import Icon from 'vue-awesome/components/Icon'
	export default{
		components: {
        	Icon
    	},
		mounted() {
			$(".back").click(function(){
				$('.back').css('display','none');
				$('.news').animate({
					left:"-267px"
				}
				, 2000 
				,function(){
					$('.go').css('display','block');
				});
				$('.news-content').animate({
					borderRightWidth:'5px'
				},2000);						
			})
			$(".go").click(function(){
				$('.news-content').animate({
					borderRightWidth:'0px'
				},0);			
				$('.go').css('display','none');
				$('.news').animate({
					left:"0px"
				}, 2000
				 ,function(){
				 	$('.back').css('display','block');
				 });					
			})			
		}
	}
</script>
<style>
	.banner{
		width:1368px;
		height: 442px;
		background: url('../../assets/pic/focus01.jpg') no-repeat;
		position:absolute;
		top:0;
	}
	.news{
		position: absolute;
		left:0;
		bottom: 0;		
	}
	.news-content {
		width: 226px;
		height: 335px;
		background-color: rgb(71,71,71);
		z-index: 5;
		border-left: 5px solid rgb(215,55,22);
		border-right: 0px solid rgb(215,55,22);
		padding:12px 18px;
	}
	.news-content ul li a:hover {
		color: rgb(255,255,255);
	}
	.news-content h2 {
		color: rgb(255,255,255);
		border-bottom: 1px solid rgb(255,255,255);
		margin-bottom: 0;
		margin-top:10px;
	}
	.news-content h2 span {
		font-size: 12px;
		display: inline-block;
		color: rgb(167,136,98);
		margin-left: 80px;
		padding-bottom: 5px;
		cursor:pointer;
	}
	.news-content h3 {
		color: rgb(215,22,55);
		font-weight: 400;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.news-content ul {
		padding-left: 0;
		margin-top: 0;
	}
	.news-content ul li {
		padding-bottom: 8px;
		background: url('../../assets/li-pre-on.png') 0% 50% no-repeat;
		padding-left: 15px;
	}
	.news-content ul li a {
		color: rgb(167,167,167);
		font-size: 13px;
		line-height: 25px;
	}	
	.news-content .back{
		color:#fff;
		width:20px;
		height: 20px;
		position:absolute;
		left:245px;
		top:165px;
		opacity:0.8;
	}
	.banner .go{
		width:20px;
		height: 20px;
		position:absolute;
		left:5px;
		top:250px;
		opacity:0.8;
		color:#fff;
		display: none;
	}	
</style>