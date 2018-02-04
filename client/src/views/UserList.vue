<template>
  <div>
    <mu-select-field v-model="location" :labelFocusClass="['label-foucs']" label="选择地点">
      <mu-menu-item v-for="item,index in locationList" :key="index" :value="item.value" :title="item.text" />
    </mu-select-field>
    <mu-select-field v-model="career" :labelFocusClass="['label-foucs']" label="选择专业领域">
      <mu-menu-item v-for="item,index in careerList" :key="index" :value="item.value" :title="item.text" />
    </mu-select-field>
    <mu-select-field v-model="evaluate" :labelFocusClass="['label-foucs']" label="选择服务质量评价">
      <mu-menu-item v-for="item,index in evaluateList" :key="index" :value="item.value" :title="item.text" />
    </mu-select-field>
    <mu-raised-button label="搜索" @click="getPersonList" primary/>
    <div>
      <mu-table ref="table" :selectable="false" :showCheckbox="false">
        <mu-thead>
          <mu-tr>
            <mu-th>姓名</mu-th>
            <mu-th>地点</mu-th>
            <mu-th>专业领域</mu-th>
            <mu-th>服务质量评价</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item in personList">
            <mu-td>{{ item.name }}</mu-td>
            <mu-td>{{ item.location | getOptionText(locationList) }}</mu-td>
            <mu-td>{{ item.career | getOptionText(careerList) }}</mu-td>
            <mu-td>{{ item.evaluate | getOptionText(evaluateList) }}</mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
  </div>
</template>

<script>
  import query from '../service/query'

  export default {
    name: 'userlist',
    data() {
      return {
      	name: '',
        location: 0,
        evaluate: 0,
        career: 0,
        personList: [],
      }
    },
    created (){
      this.getPersonList();
    },
    computed: {
    	userInfo() {
    		return this.$store.state.userInfo;
      },
      locationList() {
        return this.$store.state.locationList;
      },
      careerList() {
        return this.$store.state.careerList;
      },
      evaluateList() {
        return this.$store.state.evaluateList;
      },
    },
    methods: {
      getPersonList() {
        query.getPersonList(this.name, this.location, this.career, this.evaluate).then((res) => {
          const data = res.data.data;

          if(data.code === 1){
          	this.personList = data.data;
          }
        });
      }
    },
    components: {

    }
  }
</script>

<style lang="less" scoped>

</style>
