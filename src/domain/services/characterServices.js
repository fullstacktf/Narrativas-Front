import Client from '../../utils/axios'

export const characterImageUpload = async (data) => {
  const client = new Client()
  return await client.uploadCharacterImage(data)
}

export const getCharacter = async (id) => {
  const client = new Client()
  return await client.getCharacter(id)
}

export const getCharacters = async () => {
  const client = new Client()
  return await client.getCharacters()
}

export const createCharacter = async (data) => {
  const client = new Client()
  return await client.postCharacter(data)
}

export const updateCharacter = async () => {
  const client = new Client();
  return await client.putCharacter();
}

export const deleteCharacter = async (id) => {
  const client = new Client();
  return await client.deleteCharacter(id);
}

export const createSection = async (data, id) => {
  const client = new Client();
  return await client.postSection(data, id);
}
