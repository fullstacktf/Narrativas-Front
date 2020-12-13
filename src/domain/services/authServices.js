import Client from '../../utils/axios'

export const userLogin = async (data) => {
  const client = new Client()
  return await client.userLogin(data)
}

export const userRegister = async (data) => {
  const client = new Client()
  return await client.userRegister(data)
}
