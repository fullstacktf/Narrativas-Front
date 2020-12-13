import Client from '../../utils/axios'

export const characterImageUpload = async (data) => {
  const client = new Client()
  return await client.uploadCharacterImage(data)
}

