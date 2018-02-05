import axios from 'axios'
import md5 from 'md5'

const obj = {
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
  login (email = '', password = ''){
    return obj.post('/api/ousers/login', {
      email,
      password: md5(password)
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
  getPersonById (id = ''){
    return obj.get('/api/people/getById', {
      id,
    });
  }
};

export default obj
