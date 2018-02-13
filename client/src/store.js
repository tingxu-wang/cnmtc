import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const locationList = [
  {text: '京内', value: 1},
  {text: '京外', value: 2},
  {text: '国际', value: 3},
];

const careerList = [
  {text: '公司并购与商事', value: 1},
  {text: '海外工程承包', value: 2},
  {text: '诉讼与仲裁', value: 3},
  {text: '知识产权', value: 4},
  {text: '国际投资与贸易', value: 5},
  {text: '国内建筑施工', value: 6},
  {text: '银行与金融', value: 7},
  {text: '劳动人事', value: 8},
];

const evaluateList = [
  {text: '优秀', value: 1},
  {text: '良好', value: 2},
  {text: '一般', value: 3},
  {text: '较差', value: 4},
];



export default new Vuex.Store({
  state: {
    permission: 'user',
    locationList,
    careerList,
    evaluateList,
    locationListAll: [{text: '全部', value: 0},...locationList],
    careerListAll: [{text: '全部', value: 0},...careerList],
    evaluateListAll: [{text: '全部', value: 0},...evaluateList],

    /* 公共弹层 */
    globalDialogText: '',
    globalDialogTitle: '',
    isGlobalDialogShow: false,
  },
  mutations: {
    setPermisson(state, data) {
      state.permission = data;
    },
    showDialog(state, data) {
      const {text, title} = data;

      if(text){
        state.globalDialogText = text;
      }
      if(text){
        state.globalDialogTitle = title;
      }
      state.isGlobalDialogShow = true;
    },
    closeDialog(state) {
      state.globalDialogText = '';
      state.isGlobalDialogShow = false;
    }
  },
  actions: {

  }
})
