import axios from 'axios'
import { getCookie, DOMAIN } from '@/utils/utils'

async function authHeader() {
  const headers = {
    'Token': getCookie("token"),
  }
  return headers
}

async function fileUploadConfig(data) {
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Token': getCookie("token"),
  }
  const formData = new FormData();
  formData.append('image', data);
  return { formData, headers }
}

export default class Client {
  async getUserStories() {
    return await axios.get(DOMAIN + '/stories/').then(response => response.data)
  }

  async getCharacters() {
    const headers = await authHeader()
    return await axios.get(DOMAIN + '/characters/', { headers: headers }).then(response => response.data)
  }

  async getCharacter(id) {
    const headers = await authHeader()
    return await axios.get(DOMAIN + '/characters/' + String(id) + "/", { headers: headers }).then(response => response.data)
  }

  async postCharacter(data) {
    const headers = await authHeader()

    return await axios({
      method: 'post',
      url: DOMAIN + '/characters/',
      data: data,
      headers: headers
    });
  }

  async putCharacter() {
    const headers = await authHeader()
    return await axios.put(DOMAIN + '/characters', { headers: headers }).then(response => response.data)
  }

  async deleteCharacter(id) {
    const headers = await authHeader()
    return await axios.delete(DOMAIN + '/characters/' + String(id), { headers: headers }).then(response => response.data)
  }

  async userRegister(data) {
    return await axios.post(DOMAIN + '/auth/register', data).then(response => response)
  }

  async userLogin(data) {
    return await axios.post(DOMAIN + '/auth/login', data).then(response => response)
  }

  async uploadCharacterImage(data) {
    const config = await fileUploadConfig(data)

    return await axios({
      method: 'put',
      url: DOMAIN + '/upload/images/character',
      headers: config["headers"],
      data: config["formData"]
    })
  }

  async uploadStoryImage(data) {
    const config = await fileUploadConfig(data)

    return await axios({
      method: 'put',
      url: DOMAIN + '/upload/images/story',
      headers: config["headers"],
      data: config["formData"]
    })
  }
}
