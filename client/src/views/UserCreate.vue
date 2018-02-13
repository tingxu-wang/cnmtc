<template>
  <div>
    <user-edit :submit-method="createInfo"></user-edit>
  </div>
</template>

<script>
  import query from '../service/query'
  import UserEdit from '../components/UserEdit.vue'

  export default {
    name: 'userCreate',
    methods: {
      createInfo(info) {
        const {name, location, career, evaluate} = info;

        query.createPerson(name, location, career, evaluate).then(res =>{
        	if(res.error){
            this.$store.commit('showDialog',{text: '创建失败',title: '错误'});
          }else{
            this.$store.commit('showDialog',{text: '创建成功'});
          }
        });
      }
    },
    components: {
      UserEdit
    }
  }
</script>

<style lang="less" scoped>

</style>
