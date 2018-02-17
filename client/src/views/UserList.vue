<template>
  <div>
    <div>
      <mu-select-field v-model="location" :labelFocusClass="['label-foucs']" label="选择地点">
        <mu-menu-item v-for="item,index in locationListAll" :key="index" :value="item.value" :title="item.text" />
      </mu-select-field>
      <mu-select-field v-model="career" :labelFocusClass="['label-foucs']" label="选择专业领域">
        <mu-menu-item v-for="item,index in careerListAll" :key="index" :value="item.value" :title="item.text" />
      </mu-select-field>
      <mu-select-field v-model="evaluate" :labelFocusClass="['label-foucs']" label="选择服务质量评价">
        <mu-menu-item v-for="item,index in evaluateListAll" :key="index" :value="item.value" :title="item.text" />
      </mu-select-field>
      <div class="search">
        <mu-auto-complete label="姓名" @input="handleNameInput" :dataSource="nameDataSource" @change="handleNamechange" />
        <mu-raised-button label="搜索" @click="getPersonList" primary/>
      </div>
    </div>
    <div>
      <mu-table ref="table" :selectable="false" :showCheckbox="false">
        <mu-thead>
          <mu-tr>
            <mu-th>姓名</mu-th>
            <mu-th>地点</mu-th>
            <mu-th>专业领域</mu-th>
            <mu-th>服务质量评价</mu-th>
            <mu-th>操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in personList">
            <mu-td>{{ item.name }}</mu-td>
            <mu-td>{{ item.location | getOptionText(locationListAll) }}</mu-td>
            <mu-td>{{ item.career | getOptionText(careerListAll) }}</mu-td>
            <mu-td>{{ item.evaluate | getOptionText(evaluateListAll) }}</mu-td>
            <mu-td>
              <mu-raised-button label="查看详情" @click="toDetail(item.id)" primary/>
              <mu-raised-button label="编辑" @click="toUpdate(item.id)" v-if="permission === 'admin'" primary/>
              <mu-raised-button label="删除" @click="deletePerson(item.id, item.name, index)" v-if="permission === 'admin'" secondary/>
            </mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
    <mu-raised-button label="添加" @click="toCreate" v-if="permission === 'admin'" primary/>
  </div>
</template>

<script>
  import query from '../service/query'

  export default {
    name: 'userList',
    data (){
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
      permission (){
    		return this.$store.state.permission;
      },
      locationListAll (){
        return this.$store.state.locationListAll;
      },
      careerListAll (){
        return this.$store.state.careerListAll;
      },
      evaluateListAll (){
        return this.$store.state.evaluateListAll;
      },
      nameDataSource (){
      	return this.personList.map((item) =>{
      		return item.name;
        });
      },
    },
    methods: {
    	toDetail(id) {
    		const {href} = this.$router.resolve({ name: 'userDetail', params: {id} });
    		window.open(href, '_blank');
      },
      toUpdate(id) {
        this.$router.push({ name: 'userUpdate', params: {id} })
      },
      toCreate() {
        this.$router.push({ name: 'userCreate' })
      },
      handleNamechange(val) {
      	this.name = val;
      },
      handleNameInput(val) {
        this.name = val;
        this.getPersonList();
      },
      getPersonList() {
        query.getPersonList(this.name, this.location, this.career, this.evaluate).then((res) => {
          const data = res.data.data;

          if(data.code === 1){
          	this.personList = data.data;
          }
        });
      },
      deletePerson(id, name, index) {
        this.$store.commit('openDialog',{
        	text: `确定要删除${name}的信息吗？`,
          confirmCb:()=>{
        		query.deletePerson(id).then((res)=>{
              if(res.data.count > 0){
                this.$store.commit('openDialog',{
                	text: '删除成功'
                });
                this.personList.splice(index, 1);
              }else{
                this.$store.commit('openDialog',{
                  text: '删除失败'
                });
              }
            })
          },
        })
      },
    },
    components: {

    }
  }
</script>

<style lang="less" scoped>
.search{
  display: inline-block;
  position: relative;
  top: -11px;
}
</style>
