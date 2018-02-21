<template>
  <div class="page-container">
    <div class="login-main-container">
      <div>
        <mu-text-field hintText="用户名" v-model="email" :errorText="emailError" style="font-size: 19px;"/>
      </div>
      <div>
        <mu-text-field hintText="密码" type="password" v-model="password" :errorText="passwordError" style="font-size: 19px;"/>
      </div>
      <mu-raised-button label="提交" primary @click="submit"/>

      <div>
        {{ errorText }}
      </div>
    </div>
  </div>
</template>

<script>
  import query from '../service/query'

  export default {
    name: 'login',
    data() {
    	return {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        errorText: ''
      }
    },
    created() {
    	const email = localStorage.getItem('email'),
        password = localStorage.getItem('password');

    	if(email && password){
    		this.email = email;
    		this.password = password;
      }
    },
    methods: {
    	submit() {
    		this.emailError = '';
    		this.passwordError = '';
    		if(!this.email) this.emailError = '邮箱必填';
    		if(!this.password) this.passwordError = '密码必填';
        if(this.email && this.password){
          query.login(this.email, this.password).then((res) => {
          	if(res.error){
          		this.errorText = '账号或密码错误';
          		return
            }
            query.getPrincipalsByToken(res.data.data.data.accessToken).then((res) =>{
              const data = res.data.data;
              if(data.code === 1){
                localStorage.setItem('email', this.email);
                localStorage.setItem('password', this.password);

                localStorage.setItem('permisson', data.data.principalName);
                this.$router.push({ name: 'userList' });
              }
            });
          })
        }
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>
.page-container{
  height: 100%;
  background: url('../assets/login-bg.jpeg');
  background-size: 100% 100%;
  position: relative;


  .login-main-container{
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -80px;
    margin-top: -50px;
  }
}
</style>
