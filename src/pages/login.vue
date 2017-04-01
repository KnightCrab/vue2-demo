<style lang="less" scoped>
  .login-form{
    position: relative;
  }
  .login-error{
    width: 100%;
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: absolute;
    visibility: hidden;
    background: #ff9966;
    color: #fff;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .login-error.show{
    visibility: visible;
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .head {
    text-align: center;
    font-size: 20px;
    padding-top: 40px;
  }
	.login {
		padding: 50px;
		text-align: center;
		.line {
			padding: 10px 5px 0 5px;
      border-bottom: 1px solid #efedfa;
      display: flex;
      align-items: center;
      .fa-icon {
        color: #8585a1;
        width: 16px;
        height: 16px;
      }
			input {
				padding: 0 10px;
				line-height: 36px;
        outline: none;
        border: none;
        width: 90%
			}
		}
		button {
			padding: 0 20px;
			margin: 32px auto;
			line-height: 44px;
      height: 44px;
      background: #a798f8;
      color: #fff;
      border: none;
      border-radius: 21px;
      width: 98%;
      font-size: 16px;
		}
	}
</style>
<template>
<div>

    <div class="head"><p>LOGSDSDS</p></div>
  <div class="login-form">
      <div class="login-error" v-bind:class="{ show: isError }">
        User name or password error
      </div>
      <form class="login" v-on:submit.prevent="submit">
  			<div class="line">
          <!-- <icon name="user"></icon> -->
  				<input type="text" placeholder="Username/phone" v-model="form.name" >
  			</div>
  			<div class="line">
          <!-- <icon name="lock"></icon> -->
  				<input type="password" v-on:click="reset" placeholder="password" v-model="form.passwd" >
  			</div>
  			<button>Login</button>
  		</form>
    </div>
    <!-- <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    </mt-loadmore> -->
</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/user'

    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					name: '',
					passwd: ''
				},
        isError: false,
        list:[1,2,3,4,5],
        topStatus: '',
        name: "abc",
        passwd: "123",
        needVerify:true
			}
		},
		methods: {
            ...mapActions([USER_SIGNIN]),
      handleTopChange(status) {
              this.topStatus = status;
            },
			submit() {
				this.btn = true
				if(this.form.name!=this.name || this.form.passwd!=this.passwd) {
          this.isError = true;
          return
        }
				this.USER_SIGNIN(this.form)
        // actions中处理 USER_SIGNIN
        if(this.needVerify){
          this.$router.replace({ path: '/verify' })
        }else{
          this.$router.replace({ path: '/home' })
        }
			},
      reset(){
        this.isError = false;
      },
      loadTop() {
          this.list.push(this.list.length+1)
          this.$refs.loadmore.onTopLoaded();
        },
      loadBottom() {
        this.list.push(this.list.length+1)
        this.allLoaded = true;// if all data are loaded
        this.$refs.loadmore.onBottomLoaded();
      }

		}
    }
</script>
