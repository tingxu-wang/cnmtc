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
      	const {name, location, career, evaluate, company, call, telephone, email, rank, note} = info;
        const id = this.$route.params.id;

        query.updatePerson(id, name, location, career, evaluate, company, call, telephone, email, rank, note).then(res =>{
        	const data = res.data.data;
        	if(data.code === 1){
            this.$store.commit('openDialog', {text: data.msg});
            this.$router.push({ name: 'userList' });
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
