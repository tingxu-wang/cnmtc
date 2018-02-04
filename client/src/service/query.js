import axios from 'axios'
import md5 from 'md5'

const obj = {
  get(url, data) {
    return axios({
      url,
      method: 'get',
      params: data,
    })
  },
  login(name = '', password = '') {
    return obj.get('/api/users/login', {
      name,
      password: md5(password)
    })
  },
  getPersonList(name = '', location = 0, career = 0, evaluate = 0) {
    return obj.get('/api/people/getList', {
      name,
      location,
      career,
      evaluate,
    })
  },
};

export default obj
