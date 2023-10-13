import { Api } from "../api"

const mainPath = "/car"

export async function getCar({path = ""}) {
  try {
    const result = await new Api().GET({path: mainPath + path})
    return result
  } catch (error) {
    throw error
  }
}