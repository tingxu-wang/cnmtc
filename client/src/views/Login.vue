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
        email: '768165932@qq.com',
        password: '',
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
//            sessionStorage.setItem('userInfo', JSON.stringify(data.data));
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
