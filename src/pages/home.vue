<style lang="less" scoped>
	.orders{
		min-height:100%;
		background:#f0f0f0;
		font-family: Roboto-Regular;
	}
	.ords_head{
		background-image: linear-gradient(-90deg, #8D72FF 0%, #7D51FF 100%);
		width: 10.0rem;
		height: 0.916667rem;
		padding:0.208333rem 0;
	}
	.logout_ico{
		width: 0.666667rem;
		height:0.666667rem;
		position: absolute;
		top:0.333333rem;
		left:0.416667rem;
		// background: url("../../images/nav_logout_button.png") no-repeat;
		background-size: 100%;
	}
	.ords_state_btn{
		width: 4.722222rem;
		height: 0.916667rem;
		margin: 0 2.638889rem;
		border-radius: 1.388889rem;
		background: #9070ff;
		font-size: 0.388889rem;
		line-height: 0.388889rem;
		color:white;
	}
	.ords_state{
		display: inline-block;
		width: 2.361111rem;
		height: 0.916667rem;
		border-radius: 1.388889rem;
		float: left;
		text-align: center;
		line-height: 0.916667rem
	}
	.ords_state_active{
		color: #7D51FF;
		background: #FFFFFF;
	}
	.ords_box{
		width:9.444444rem;
		background: #FFFFFF;
		box-shadow: 0 0.083333rem 0.277778rem 0 #D2D2D2;
		border-radius: 0.111111rem;
		margin:0.416667rem auto;
	}
	.ord_no{
		width: 8.611111rem;
		height: 1.166667rem;
		margin:0 auto;
		font-size: 0.333333rem;
		color: #8585A1;
		line-height: 1.166667rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_dispatch_state{
		float:right;
		color:#F87622;
	}
	.ord_send_info{
		width: 8.611111rem;
		margin:0 auto;
		padding:0.416667rem 0;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_send_info{
		font-size: 0.388889rem;
		color: #252436;
	}
	.ord_send_addr{
		margin-top:0.277778rem;
	}
	.ord_line{
		// background: url("../../images/order_line.png");
		background-color:#f0f0f0;
		height: 0.5rem;
		background-size: 100% 100%;
		margin:0 -0.277778rem;
	}
	.ord_line>p{
		width: 8.611111rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
		height: 50%;
		margin:0 auto;
	}
	.ord_send_message{
		width: 8.611111rem;
		margin:0.416667rem auto;
		font-size:0.388889rem;
		color: #131218;
		line-height: 0.388889rem;
	}
	.ord_send_message>span{
		color:#8585A1;
	}
	.ord_view_more{
		padding-bottom: 0.347222rem;
		margin-top:-0.027778rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_view_more_btn{
		width: 6.944444rem;
		height: 0.527778rem;
		text-align: center;
		background: #EFEDFA;
		border-radius: 1.388889rem;
		line-height: 0.527778rem;
		font-size: 0.277778rem;
		color: #8585A1;
		margin:0 auto;
	}
	.ord_view_more_btn i{
		width: 0.25rem;
		height: 0.25rem;
		display: inline-block;
		// background-image: url('../../images/view_more.png');
		background-size: 100% 100%;
		margin-left: 0.083333rem;
	}
	.ord_money{
		width: 8.611111rem;
		height: 1.805556rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
		margin:0 auto;
	}
	.ord_money_title{
		float: left;
		font-size: 0.444444rem;
		color: #252436;
		height: 1.805556rem;
		line-height: 1.805556rem;
	}
	.ord_money_info{
		float: right;

	}
	.ord_money_info p:first-child{
		font-size: 0.5rem;
		color: #7D51FF;
		margin-top:0.416667rem;
		margin-bottom: 0.138889rem;
	}
	.ord_money_info p:last-child{
		font-size: 0.333333rem;
		color: #8585A1;
	}
	.ord_action{
		width: 8.611111rem;
		height: 1.805556rem;
		margin: auto;
	}
	.ord_btn{
		width: 3.055556rem;
		height: 0.972222rem;
		line-height: 0.972222rem;
		text-align: center;
		font-size: 0.388889rem;
		color: #7D51FF;
		margin: 0.416667rem 0;
		float: right;
	}
	.ord_dispatch_btn{
		background: #7D51FF;
		box-shadow: 0 0.055556rem 0.111111rem 0 #D2D2D2;
		border-radius: 1.388889rem;
		color:white;
	}
</style>
<template>
	<div class="orders">
		<div class="ords_head">
			<span class="logout_ico"></span>
			<div class="ords_state_btn">
				<span class="ords_state" :class="{ords_state_active: isActive}" @click="changeOrderState(1)">Waiting</span>
				<span class="ords_state" :class="{ords_state_active: !isActive}"
				@click="changeOrderState(2)">Finished</span>
			</div>
		</div>
		<div class="ords_main clearfix">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
				<div class="ords_box" v-for="item in list">
					<p class="ord_no">
						<span>Order No.9000000031282502</span>
						<span class="ord_dispatch_state">Pending Dispatch</span>
					</p>
					<div class="ord_send_info">
						<p>Devin Cai  0728241313</p>
						<p class="ord_send_addr">Nairobi mayfairsuites,1st floor parklands rd Westland</p>
					</div>
					<div class="ord_send_message">
						<span>Message</span>: Hi bro what’s upHi bro what’s upHi bro what’s up
					</div>
					<div class="ord_line">
						<p></p>
					</div>
					<div class="ord_view_more">
						<div class="ord_view_more_btn">VIEW MORE<i></i></div>
					</div>
					<div class="ord_detail">
						<div class="ord_detail_product">
							<div class="ord_detail_left">
								<p></p>
							</div>
						</div>
					</div>
					<div class="ord_money clearfix">
						<div class="ord_money_title">
							Total Order
						</div>
						<div class="ord_money_info">
							<p>Ksh 55,209</p>
							<p>Online Payment</p>
						</div>
					</div>
					<div class="ord_action clearfix">
						<div class="ord_btn ord_dispatch_btn">DISPATCH</div>
						<div class="ord_btn ord_cancel_btn">CANCEL</div>
					</div>
				</div>
			</mt-loadmore>
		</div>
	</div>

</template>
<script>
    import { mapState } from 'vuex'
    export default {
    	data: function () {
			return {
				isActive: false,
				list: [1,1,1,1,1,1,1,1,1],
			}
    	},
        computed: mapState({ user: state => state.user }),
        methods:{
        	changeOrderState:function(state){
        		if(state === 1){//waiting
        			this.isActive=true;
        		}else if(state === 2){//finished
        			this.isActive=false;
        		}
        	},

			loadTop: function () {
				let _this = this;
				setTimeout(function () {
					_this.$refs.loadmore.onTopLoaded();
					let i = _this.list[0] - 1;
					_this.list.unshift(i);
				}, 1000);
			},
			loadBottom: function () {
				let _this = this;
				setTimeout(function () {
					let i = _this.list[_this.list.length - 1] + 1;
					_this.list.push(i);
					//_this.allLoaded = true;
					_this.$refs.loadmore.onBottomLoaded();
				}, 1000);
			},
        },
    }
</script>
