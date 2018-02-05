<template>
  <div>
    <mu-card>
      <mu-card-title :title="userInfo.name"/>
      <mu-card-title title="地点" :subTitle="userInfo.location | getOptionText(locationList)"/>
      <mu-card-title title="专业领域" :subTitle="userInfo.career | getOptionText(careerList)"/>
      <mu-card-title title="服务质量评价" :subTitle="userInfo.evaluate | getOptionText(evaluateList)"/>
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
      locationList (){
        return this.$store.state.locationList;
      },
      careerList (){
        return this.$store.state.careerList;
      },
      evaluateList (){
        return this.$store.state.evaluateList;
      },
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>

</style>
