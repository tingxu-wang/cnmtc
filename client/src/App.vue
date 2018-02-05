<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    watch: {
      '$route': 'routerChange'
    },
    created (){
//    	this.checkLogin();
    },
    methods: {
      routerChange (){
//      	this.checkLogin();
      },
      checkLogin (){
        const userInfo = sessionStorage.getItem('userInfo');

        if(this.$route.name === 'login'){
          if(userInfo){
            this.$router.go(-1);
          }
        }else{
          if(userInfo){
            this.$store.commit('setUserInfo', JSON.parse(userInfo));
          }else{
            this.$router.push({ name : 'login' });
          }
        }
      }
    },
    components: {

    }
  }
</script>

<style lang="less">

</style>
