<template>
  <div class="page-container">
    <div class="login-main-container">
      <mu-text-field hintText="邮箱" v-model="email" :errorText="emailError"/>
      <mu-text-field hintText="密码" type="password" v-model="password" :errorText="passwordError"/>
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
        email: 'admin@e.com',
        password: '12345',
        emailError: '',
        passwordError: '',
        errorText: ''
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
            localStorage.setItem('access_token', res.data.data.data.accessToken);
            this.$router.push({ name: 'userList' });
          })
        }
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>

</style>
