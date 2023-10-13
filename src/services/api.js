import { secretKey } from "../secretKey";

class Api {
  url = secretKey.URL
  defaultHeader = {
    'Content-Type': 'application/json',
  }
  constructor(){}
  async handler(result,error = null) {
    let mappedResponse = {
      data: null,
      message: "",
      status: ""
    }
    try {
      if (error !== null) throw error
      if (result.status >= 200 && result.status <= 299) {
        const final = await result.json()
        mappedResponse.data = final.data
        mappedResponse.message = "SUCCESS"
        mappedResponse.status = "OK"
        return mappedResponse
      } else if (result.status >= 300 && result.status <= 399) {
        throw {message: "error 300"}
      } else if (result.status >= 400 && result.status <= 499) {
        throw {message: "error 400"}
      } else if (result.status >= 500 && result.status <= 599) {
        throw {message: "error 500"}
      } else {
        throw {message: "error unknown status"}
      }
    } catch (error) {
      mappedResponse.message = error?.message
      mappedResponse.status = "FAILED"
      return mappedResponse
    }
  }
  async GET({
    path = ""
  }) {
    try {
      const fullUrl = this.url + path
      const settings = {
        method: 'GET',
        headers: this.defaultHeader
      };
      const rawResult = await fetch(fullUrl,settings)
      const result = await this.handler(rawResult)
      return result
    } catch (error) {
      const result = await this.handler("",error)
      throw result
    }
  }
  async POST({
    path = ""
  }) {
    try {
      
    } catch (error) {
      throw error
    }
  }
}

export {
  Api
}