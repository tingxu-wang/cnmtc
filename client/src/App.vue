<template>
  <div id="app">
    <mu-dialog :open="isDialogShow" :title="dialogTitle || '提示'" @close="dialogClose">
      {{ globalDialogText }}
      <mu-flat-button slot="actions" primary @click="dialogConfirm" label="确定"/>
      <mu-flat-button slot="actions" primary @click="dialogClose" label="取消"/>
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
      isDialogShow() {
        return this.$store.state.isDialogShow;
      },
      dialogTitle() {
        return this.$store.state.dialogTitle;
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
        this.setUserInfo();
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
      dialogConfirm (){
        this.$store.commit('dialogConfirm');
      },
    },
    components: {

    }
  }
</script>

<style lang="less">
  /* global style */
  .mu-text-field-label{
    font-size: 18px;
  }
  .mu-th{
    .mu-th-wrapper{
      font-size: 15px;
    }
  }
</style>
