import axios from 'axios'

export default class Client {
  async getUserStories() {
    return await axios.get('https://api.rollify.me/stories').then(response => response.data)
  }

  async getUserCharacters() {
    return await axios.get('https://api.rollify.me/characters').then(response => response.data)
  }

  async userRegister(data) {
    return await axios.post('https://api.rollify.me/auth/register', data).then(response => response)
  }

  async userLogin(data) {
    return await axios.post('https://api.rollify.me/auth/login', data).then(response => response)
  }
}
