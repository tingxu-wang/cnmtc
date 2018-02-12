<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import query from './service/query';

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
    	this.setUserInfo();
    },
    methods: {
      routerChange (){

      },
      setUserInfo (){
        const access_token = localStorage.getItem('access_token');

        if(access_token){
          query.getPrincipalsByToken(access_token).then((res) =>{
          	const data = res.data.data;
          	if(data.code === 1){
              this.$store.commit('setUserInfo', data.data);
            }
          })
        }
      }
    },
    components: {

    }
  }
</script>

<style lang="less">

</style>
