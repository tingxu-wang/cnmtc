<template>
  <div>
    <div>
      <mu-text-field v-model="formInfo.name" label="姓名"/>
    </div>
    <div>
      <mu-select-field v-model="formInfo.location" :labelFocusClass="['label-foucs']" label="地点">
        <mu-menu-item v-for="item,index in locationList" :key="index" :value="item.value" :title="item.text" />
      </mu-select-field>
    </div>
    <div>
      <mu-select-field v-model="formInfo.career" :labelFocusClass="['label-foucs']" label="专业领域">
        <mu-menu-item v-for="item,index in careerList" :key="index" :value="item.value" :title="item.text" />
      </mu-select-field>
    </div>
    <div>
      <mu-select-field v-model="formInfo.evaluate" :labelFocusClass="['label-foucs']" label="服务质量评价">
        <mu-menu-item v-for="item,index in evaluateList" :key="index" :value="item.value" :title="item.text" />
      </mu-select-field>
    </div>

    <mu-raised-button label="提交" @click="submit" primary/>
  </div>
</template>

<script>
  export default {
    name: 'userEdit',
    data() {
      return {
      	formInfo: {
          name: '',
          evaluate: 1,
          career: 1,
          location: 1,
        }
      }
    },
    watch: {
    	'userInfo' : 'setForm'
    },
    created() {

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
      }
    },
    methods: {
      setForm (){
        const {name, evaluate, career, location} = this.userInfo;
        this.formInfo.name = name;
        this.formInfo.evaluate = evaluate;
        this.formInfo.career = career;
        this.formInfo.location = location;
      },
      submit (){
        if(this.submitMethod){
        	this.submitMethod(this.formInfo);
        }
      },
    },
    props: {
      userInfo: {
      	type: Object,
        default: function(){
        	return {}
        },
      },
      submitMethod: {
      	type: Function,
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
