<template>

	<div class="god-container">
		<div class="god-banner">
			<div class="god-news">
				<div class="god-news-content">
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
					<icon class="god-back" name="angle-double-left"></icon>	
				</div>
			</div>
			<icon class="god-go" name="angle-double-right"></icon>	
		</div>
		<section class="god-tab">
			<ul>
				<router-link class="god-rl" to="/"><li>有杀气童话</li></router-link>
				<router-link class="god-rl" to="/god"><li class="target">神魔决</li></router-link>
				<router-link class="god-rl" to="/"><li>天下3</li></router-link>
				<router-link class="god-rl" to="/"><li>魔兽世界</li></router-link>
				<router-link class="god-rl" to="/"><li>恶魔不要啊</li></router-link>
			</ul>
		</section>
		<section class="god-product">
			<h1>充值产品</h1>
			<article class="pro-container">
				<div class="item item-1">
					<a href="#">
						<icon class="icon fire" name="h-square"></icon>
						热门
					</a>
				</div>
				<div class="item item-2">
					<a href="#">
						<icon class="icon desktop" name="desktop"></icon>
						端游
					</a>
				</div>
				<div class="item item-3">
					<a href="#">
						<icon class="icon mobile" name="mobile-alt"></icon>
						手游
					</a>
				</div>
				<div class="item item-4">
					<a href="#">
						<icon class="icon star" name="star"></icon>
						其他产品
					</a>
				</div>
				<div class="item item-5">
					<img src="../../assets/new-ico.png" alt="">
					<p>口袋侏罗纪</p>
				</div>
				<div class="item item-6">
					<img src="../../assets/new-ico.png" alt="">
					<p>恶魔不要啊</p>
				</div>
				<div class="item item-7">
					<p>藏地传奇</p>
				</div>
				<div class="item item-8">
					<p>魔兽世界</p>
				</div>
				<div class="item item-9">
					<p>口袋侏罗纪</p>
				</div>
				<div class="item item-10">
					<p>恶魔不要啊</p>
				</div>
				<div class="item item-11">
					<p>藏地传奇</p>
				</div>
				<div class="item item-12">
					<p>魔兽世界</p>
				</div>
				<div class="item item-13">
					<p>口袋侏罗纪</p>
				</div>
				<div class="item item-14">
					<p>恶魔不要啊</p>
				</div>
				<div class="item item-15">
					<p>藏地传奇</p>
				</div>
				<div class="item item-16">
					<p>魔兽世界</p>
				</div>
			</article>
		</section>
	</div>
</template>
<script>
	import 'vue-awesome/icons'
	import Icon from 'vue-awesome/components/Icon'
	export default{
		components:{
			Icon
		},
		mounted(){
			$(".god-back").click(function(){
				$('.god-back').css('display','none');
				$('.god-news').animate({
					left:"-267px"
				}
				, 2000 
				,function(){
					$('.god-go').css('display','block');
				});
				$('.god-news-content').animate({
					borderRightWidth:'5px'
				},2000);						
			})
			$(".god-go").click(function(){
				$('.god-news-content').animate({
					borderRightWidth:'0px'
				},0);			
				$('.god-go').css('display','none');
				$('.god-news').animate({
					left:"0px"
				}, 2000
				 ,function(){
				 	$('.god-back').css('display','block');
				 });					
			})			
			$('.god-container .god-tab li').mouseover(function(){
				$('.god-container .god-tab li.target').removeClass('target');
				$(this).addClass('target');

			});
			$('.god-container .god-tab li').mouseout(function(){
				$(this).removeClass('target');
				$('.god-container .god-tab .god-rl:nth-child(2) li').addClass('target');
			})
		}
	}
</script>
<style>
	.god-container{
		display:flex;
		margin-top: 358px;
	}
	.god-banner{
		width:1368px;
		height: 442px;
		background: url('../../assets/pic/focus02.png') no-repeat;
		position:absolute;
		top:0;
	}
	.god-news{
		position: absolute;
		left:0;
		bottom: 0;		
	}
	.god-news-content {
		width: 226px;
		height: 335px;
		background-color: rgb(71,71,71);
		z-index: 5;
		border-left: 5px solid rgb(215,55,22);
		border-right: 0px solid rgb(215,55,22);
		padding:12px 18px;
	}
	.god-news-content ul li a:hover {
		color: rgb(255,255,255);
	}
	.god-news-content h2 {
		color: rgb(255,255,255);
		border-bottom: 1px solid rgb(255,255,255);
		margin-bottom: 0;
		margin-top:10px;
	}
	.god-news-content h2 span {
		font-size: 12px;
		display: inline-block;
		color: rgb(167,136,98);
		margin-left: 80px;
		padding-bottom: 5px;
		cursor:pointer;
	}
	.god-news-content h3 {
		color: rgb(215,22,55);
		font-weight: 400;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.god-news-content ul {
		padding-left: 0;
		margin-top: 0;
	}
	.god-news-content ul li {
		padding-bottom: 8px;
		background: url('../../assets/li-pre-on.png') 0% 50% no-repeat;
		padding-left: 15px;
	}
	.god-news-content ul li a {
		color: rgb(167,167,167);
		font-size: 13px;
		line-height: 25px;
	}	
	.god-news-content .god-back{
		color:#fff;
		width:20px;
		height: 20px;
		position:absolute;
		left:245px;
		top:165px;
		opacity:0.8;
	}
	.god-banner .god-go{
		width:20px;
		height: 20px;
		position:absolute;
		left:5px;
		top:250px;
		opacity:0.8;
		color:#666;
		display: none;
	}	
	.god-container .god-tab{
		min-width:200px;
		border-left: 5px solid #d71637;
	}
	.god-container .god-tab ul li{
		width:150px;
		height: 50px;
		background-color: #d0d0d0;
		border-radius:5px 80px;
		text-align: center;
		line-height: 50px;
		color:#838383;
		margin-bottom: 79px;
		margin-left: -40px;
		cursor:pointer;
	}
	.god-container .god-tab ul li:nth-child(1){
		margin-top:50px;
	}
	.god-container .god-tab .target{
		background-color: #d71637;
		color:#fff;
		font-size: 18px;
	}

	.god-container .god-product{
		flex:1;
		margin-top: 20px;
		margin-left: 50px;
	}
	.god-container .god-product h1{
		color:#d71637;
	}
	.god-container .god-product .pro-container{
		display:grid;/*生成块级网格*/
		grid-template-columns:250px 250px 250px 250px;
		grid-template-rows:60px 150px 150px 150px;
	}
	.god-container .god-product .pro-container .item{
		color:#838383;
		border:0.1px solid #d0d0d0;
		font-size:18px;
		padding: 15px 60px;
	}
	.god-container .god-product .pro-container .item .icon{
		color:#d71637;
		width:20px;
		height:20px;
		padding-top:5px;
		vertical-align:-12%;
	}
	.god-container .god-product .pro-container .item .mobile{
		width:20px;
		height:20px;
		padding-top: 0px !important;
		vertical-align:-15% !important;
	}
	.god-container .god-product .pro-container .item-1{
		padding: 10px 80px !important;
		border-top: 4px solid #d71637;
	}
	.god-container .god-product .pro-container .item-2,.item-3,.item-4{
		background-color: #f3f3f3;
	}
	.god-container .god-product .pro-container .item-2{
		padding: 15px 90px !important;
	}.god-container .god-product .pro-container .item-3{
		padding: 15px 85px !important;
	}
	.god-container .god-product .pro-container .item-4{
		padding: 15px 70px !important;
	}
	.god-container .god-product .pro-container .item-5,.item-9,.item-13{
		background: #fff url('../../assets/pic/game01-logo.png') 50% 20% no-repeat;
	}
	.god-container .god-product .pro-container .item-6,.item-10,.item-14{
		background: #fff url('../../assets/pic/game02-logo.png') 50% 20% no-repeat;
	}
	.god-container .god-product .pro-container .item-7,.item-11,.item-15{
		background: #fff url('../../assets/pic/game03-logo.png') 50% 20% no-repeat;
	}
	.god-container .god-product .pro-container .item-8,.item-12,.item-16{
		background: #fff url('../../assets/pic/game04-logo.png') 50% 20% no-repeat;
	}
	.god-container .god-product .pro-container .item img{
		margin-top:-15px;
		margin-left:-60px;
	}

	.god-container .god-product .pro-container .item-5 p,.item-6 p{
		margin-top: 60px;
		margin-left:20px;
	}
	.god-container .god-product .pro-container .item-7 p,.item-8 p{
		margin-top: 85px;
		margin-left:25px;
	}
	.god-container .god-product .pro-container .item-9 p,.item-10 p,.item-11 p,.item-12 p,.item-13 p
	,.item-14 p,.item-15 p,.item-16 p{
		margin-top: 85px;
		margin-left:20px;
	}
</style>