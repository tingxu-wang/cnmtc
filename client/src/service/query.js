import axios from 'axios'
import md5 from 'md5'

const obj = {
  filter(url, data) {
    return axios({
      url,
      method: 'get',
      params: data,
    })
  },
  login (name = '', password = '') {
    return obj.filter('/api/users/count', {
      where: {
        name,
        password: md5(password)
      }
    })
  }
}

export default obj
