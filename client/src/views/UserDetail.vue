<template>
  <div>
    <mu-card>
      <mu-card-title :title="userInfo.name"/>
      <mu-card-title title="地点" :subTitle="userInfo.location | getOptionText(locationListAll)"/>
      <mu-card-title title="专业领域" :subTitle="userInfo.career | getOptionText(careerListAll)"/>
      <mu-card-title title="服务质量评价" :subTitle="userInfo.evaluate | getOptionText(evaluateListAll)"/>
      <mu-card-title title="工作单位" :subTitle="userInfo.company"/>
      <mu-card-title title="办公室电话" :subTitle="userInfo.call"/>
      <mu-card-title title="联系方式" :subTitle="userInfo.telephone"/>
      <mu-card-title title="电子邮箱" :subTitle="userInfo.email"/>
      <mu-card-title title="工作业绩" :subTitle="userInfo.rank"/>
      <mu-card-title title="备注" :subTitle="userInfo.note"/>
    </mu-card>
  </div>
</template>

<script>
  import query from '../service/query'

  export default {
  	name: 'userDetail',
    data (){
  		return {
        userInfo : {},
      }
    },
    created (){
    	const id = this.$route.params.id;
      query.getPersonById(id).then((res) =>{
      	const data = res.data.data;

      	if(data.code === 1){
      		this.userInfo = data.data;
        }else{

        }
      })
    },
    computed: {
      locationListAll (){
        return this.$store.state.locationListAll;
      },
      careerListAll (){
        return this.$store.state.careerListAll;
      },
      evaluateListAll (){
        return this.$store.state.evaluateListAll;
      },
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>

</style>
