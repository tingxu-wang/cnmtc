<template>
  <div>
    <user-edit :user-info="userInfo" :submit-method="updateInfo"></user-edit>
  </div>
</template>

<script>
  import query from '../service/query'
  import UserEdit from '../components/UserEdit.vue'

  export default {
  	name: 'userUpdate',
    data() {
  		return {
        userInfo : {}
      }
    },
    created() {
      const id = this.$route.params.id;
      query.getPersonById(id).then((res) =>{
        const data = res.data.data;

        if(data.code === 1){
          this.userInfo = data.data;
        }
      })
    },
    methods: {
      updateInfo (info){
      	const {name, location, career, evaluate} = info;
        const id = this.$route.params.id;

        query.updatePerson(id, name, location, career, evaluate).then(res =>{
        	const data = res.data.data;
        	if(data.code === 1){
            this.$store.commit('showDialog', {text: data.msg});
          }
        })
      }
    },
    components: {
  		UserEdit
    }
  }
</script>

<style lang="less" scoped>

</style>
