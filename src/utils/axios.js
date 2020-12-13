import axios from 'axios'
import { getCookie } from '@/utils/utils'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

const DOMAIN = "http://127.0.0.1:9090"

async function fileUploadConfig(data) {
  const formData = new FormData();
  formData.append('image', data);
  const config = {
    headers: {
      'token': getCookie("token"),
      'content-type': 'multipart/form-data',
    }
  }
  return { formData, config }
}

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

  async uploadCharacterImage(data) {
    const config = await fileUploadConfig(data)
    return await axios.put(DOMAIN + '/upload/images/character', config["config"], config["formData"])
  }

  async uploadStoryImage(data) {
    const config = await fileUploadConfig(data)
    return await axios.put(DOMAIN + '/upload/images/story', config["config"], config["formData"])
  }
}
