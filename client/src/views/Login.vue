<template>
  <div class="page-container">
    <div class="login-main-container">
      <mu-text-field hintText="用户名" v-model="name" :errorText="nameError"/>
      <mu-text-field hintText="密码" type="password" v-model="password" :errorText="passwordError"/>
      <mu-raised-button label="提交" primary @click="submit"/>
    </div>
  </div>
</template>

<script>
  import query from '../service/query'
  export default {
    name: 'login',
    data() {
    	return {
        name: '',
        password: '',
        nameError: '',
        passwordError: '',
      }
    },
    methods: {
    	submit() {
    		this.nameError = '';
    		this.passwordError = '';
    		if(!this.name) this.nameError = '用户名必填';
    		if(!this.password) this.passwordError = '密码必填';
        if(this.name && this.password){
          query.login(this.name, this.password).then((res) => {
          	console.log(res);
          })
        }
      }
    },
    components: {
    }
  }
</script>

<style lang="less">
.page-container{
  .login-main-container{

  }
}
</style>
