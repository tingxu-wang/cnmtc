<template>
  <div id="app">
    <mu-dialog :open="isGlobalDialogShow" :title="globalDialogTitle || '提示'" @close="dialogClose">
      {{ globalDialogText }}
      <mu-flat-button slot="actions" primary @click="dialogClose" label="确定"/>
    </mu-dialog>
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
    computed: {
      globalDialogText() {
        return this.$store.state.globalDialogText;
      },
      isGlobalDialogShow() {
        return this.$store.state.isGlobalDialogShow;
      },
      globalDialogTitle() {
        return this.$store.state.globalDialogTitle;
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

      /* 权限 */
      setUserInfo (){
        const permisson = localStorage.getItem('permisson');

        if(permisson){
          this.$store.commit('setPermisson', permisson);
        }
      },

      /* 弹层 */
      dialogClose (){
      	this.$store.commit('closeDialog');
      },
    },
    components: {

    }
  }
</script>

<style lang="less">

</style>
