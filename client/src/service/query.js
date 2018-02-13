import axios from 'axios'
import md5 from 'md5'
import vue from '../main'

axios.interceptors.response.use(res => {
  const data = res.data.data;
  if(data){
    if(data.code === 0){
      const store = vue.$store;
      store.commit('showDialog',{text: data.msg || '未知错误',title: '错误'});
    }
  }
  return res;
}, err => {
  if(err.response){
    const store = vue.$store;
    switch(err.response.status){
      case 401:
        store.commit('showDialog',{text: '登录超时,请重新登录', title: '错误'});
        vue.$router.replace({ name: 'login' });
        break;
    }
  }

  return Promise.reject(err.response.data)
});

const obj = {
  /*
  * common methods
  * */
  get (url, data){
    return axios({
      url,
      method: 'get',
      params: data,
    })
  },
  post (url, data, params = ''){
    return axios({
      url,
      method: 'post',
      data,
      params,
    })
  },
  put (url, data, params = ''){
    return axios({
      url,
      method: 'put',
      data,
      params,
    })
  },

  /*
  * business logic
  * */
  login (email = '', password = ''){
    return obj.post('/api/ousers/userLogin', {
      email,
      password: md5(password)
    })
  },
  getPrincipalsByToken (access_token = ''){
    return obj.post('/api/Roles/getPrincipalsByToken', {
      access_token,
    })
  },
  getPersonList (name = '', location = 0, career = 0, evaluate = 0){
    return obj.get('/api/people/getList', {
      name,
      location,
      career,
      evaluate,
    })
  },
  createPerson (name = '', location = 0, career = 0, evaluate = 0){
    return obj.post('/api/people', {
      name,
      location,
      career,
      evaluate,
    })
  },
  getPersonById (id = ''){
    return obj.get('/api/people/getById', {
      id,
    });
  },
  updatePerson (id = '', name, location, career, evaluate){
    return obj.put('/api/people/updatePerson', {
      id,
      name,
      location,
      career,
      evaluate,
    })
  }
};

export default obj
