<template>
<div id="wrapper">
	<h1 class="h1Title">注册</h1>
	<form action="">

		<ul class="registerLine">
			<li>
	    		<span>手机号：</span>
	    		<input type="text" placeholder="请输入手机号" v-model="uname">
			</li>
			<li>
	    		<span>验证号：</span>
	    		<input type="text" placeholder="请输入验证码" v-model="passCode">
	    		<span class="getCode" @click="getCode">获取验证码</span>
			</li>
			<li>
	    		<span>密<span style="opacity:0">零</span>码：</span>
	    		<input type="password" placeholder="请输入密码" v-model="pwd">
			</li>
		</ul>

	    <span class="loginButton" @click="register">免费注册</span>

    </form>
	<info v-bind:msg="loginMsg" v-show="msgBox"></info>
</div>
</template>
<script>
import store from '../store';

    export default {
    	components:{
    		'info':info
    	},
    	data(){
    		return{
    			uname:'15989636181',
    			pwd:'111AAA',
    			passCode:'555666',
    			loginMsg:''	
    		}
    	},
    	computed:{
    		msgBox(){
    			return this.loginMsg.length>0?true:false;
    		}
    	},
        methods:{
        	getCode(){

    		    var url = '/none/register/smsCode';

    			var src = 'clientType=3&phoneNum='+this.uname+'&sign=93fe82d8827e09c41841456ff0416e2f'

				this.$http.post(url,src).then(result=>{
					if(result.data.success){

					}else{
						this.loginMsg = result.data.message;
						var THIS = this;
						setTimeout(function(){THIS.loginMsg=''},1200)
					}
				},result=>{
					alert('连接失败')
				});        		
        	},
        	register(){

    		    var url = '/none/register';

        		var src = 'clientType=3&pwd='+this.pwd+'&sign=93fe82d8827e09c41841456ff0416e2f&userName='+this.uname+'&checkCode=555666';

				this.$http.post(url,src).then(result=>{
					if(result.data.success){
						//注册成功后登陆获得token
	        			var url = '/none/login';

	        			var src = 'clientType=3&sign=93fe82d8827e09c41841456ff0416e2f'+'&uname='+this.uname+'&pwd='+this.pwd;
						// var get = url+'?'+src
	        			// this.$http.get('get).then(m=>console.log(m.data));

						this.$http.post(url,src).then(result=>{
							if(result.data.success){
								store.state.user.token = result.data.data;//获得token
			            		this.$router.push({path:'/detail'});
							}
						},result=>{
							alert('连接失败');
						});

					}else{
						this.loginMsg = result.data.message;
						var THIS = this;
						setTimeout(function(){THIS.loginMsg=''},1200)
					}
				},result=>{
					alert('连接失败')
				});    

        	}
        }
    }

</script>
<style lang="less" scoped>
	#wrapper{
		padding:1px 0.347rem 0;
	}
	input{
		outline: none;
		border:none;
		background:none;
		width:130px;
		height:30px;
	}
	form{
		height:5rem;
		margin:1rem auto;
	}
	.h1Title{
		text-align: center;
		font-weight: normal;
		margin-top: 10px;
	}
	.loginButton{
		width:9.4rem;
		display:inline-block;
		text-align: center;
		height:1.2rem;
		line-height: 1.28rem;
		background:#fa3c0c;
		font-size: 0.5rem;
		background:#c5c5c5;
		color:#fff;
		border-radius:0.6rem;
		position: absolute;
		right:0;
		left:0;
		margin:0 auto;
		top:8.0rem;
	}
	.loginButton.okPass{
		background:#fa3c0c;
	}
	.registerLine{
		li{
			font-size: 0.4rem;
			position: relative;
			height:1.333rem;
			line-height: 1.333rem;
			border-bottom: 1px solid #c4c4c4;
			input{
				width:4rem;
				height:1.3rem;
				font-size: 0.4rem;
			}
			.getCode{
				width:3.2rem;
				height:0.693rem;
				line-height:0.693rem;
				display:inline-block;
				border-left: 1px solid #fa3c0c;
				color:#fa3c0c;
				position:absolute;
				right:0;
				text-align: center;
				top:0.34rem;
			}
		}
	}
</style>