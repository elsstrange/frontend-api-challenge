class chitterApiClient {
  async getPeeps(){
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    let data = await response.json()
    console.log(data)
    return data
  }
}
