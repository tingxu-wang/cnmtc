import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    locationList: [
      {text: '全部', value: 0},
      {text: '京内', value: 1},
      {text: '京外', value: 2},
      {text: '国际', value: 3},
    ],
    careerList: [
      {text: '全部', value: 0},
      {text: '公司并购与商事', value: 1},
      {text: '海外工程承包', value: 2},
      {text: '诉讼与仲裁', value: 3},
      {text: '知识产权', value: 4},
      {text: '国际投资与贸易', value: 5},
      {text: '国内建筑施工', value: 6},
      {text: '银行与金融', value: 7},
      {text: '劳动人事', value: 8},
    ],
    evaluateList: [
      {text: '全部', value: 0},
      {text: '优秀', value: 1},
      {text: '良好', value: 2},
      {text: '一般', value: 3},
      {text: '较差', value: 4},
    ]
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    }
  },
  actions: {

  }
})
