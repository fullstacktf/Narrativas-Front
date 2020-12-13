import axios from 'axios'

const DOMAIN = "http://127.0.0.1:9090"

export default class Client {
  async getUserStories() {
    return await axios.get('https://api.rollify.me/stories').then(response => response.data)
  }

  async getUserCharacters() {
    return await axios.get('https://api.rollify.me/characters').then(response => response.data)
  }

  async userRegister(data) {
    return await axios.post(DOMAIN + '/auth/register', data).then(response => response)
  }

  async userLogin(data) {
    return await axios.post(DOMAIN + '/auth/login', data).then(response => response)
  }
}
