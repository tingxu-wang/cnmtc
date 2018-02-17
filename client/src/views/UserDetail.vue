<template>
  <div class="container">
    <mu-table ref="table" :selectable="false" :showCheckbox="false">
      <mu-tbody>
        <mu-tr>
          <mu-td class="head">姓名</mu-td>
          <mu-td>{{ userInfo.name }}</mu-td>

          <mu-td class="head">地点</mu-td>
          <mu-td>{{ userInfo.location | getOptionText(locationListAll) }}</mu-td>
        </mu-tr>

        <mu-tr>
          <mu-td class="head">专业领域</mu-td>
          <mu-td>{{ userInfo.career | getOptionText(careerListAll) }}</mu-td>

          <mu-td class="head">服务质量评价</mu-td>
          <mu-td>{{ userInfo.evaluate | getOptionText(evaluateListAll) }}</mu-td>
        </mu-tr>

        <mu-tr>
          <mu-td class="head">工作单位</mu-td>
          <mu-td>{{ userInfo.company }}</mu-td>

          <mu-td class="head">办公室电话</mu-td>
          <mu-td>{{ userInfo.call }}</mu-td>
        </mu-tr>

        <mu-tr>
          <mu-td class="head">联系方式</mu-td>
          <mu-td>{{ userInfo.telephone }}</mu-td>

          <mu-td class="head">电子邮箱</mu-td>
          <mu-td>{{ userInfo.email }}</mu-td>
        </mu-tr>

        <mu-tr>
          <mu-td class="head">工作业绩</mu-td>
          <mu-td colspan="3">{{ userInfo.rank }}</mu-td>
        </mu-tr>

        <mu-tr>
          <mu-td class="head">备注</mu-td>
          <mu-td colspan="3">{{ userInfo.note }}</mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
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
  .container{
    margin-top: 20px;
    .head{
      background-color: #eee;
    }
    .mu-tr{
      &.hover{
         background-color: #fff;
       }
      .mu-td{
        word-wrap: break-word;
        white-space: normal;
      }
    }
  }

</style>
