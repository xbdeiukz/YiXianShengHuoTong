import { HTTP } from 'utils/http'
import config from 'utils/config'

class IndexModel extends HTTP {
  getHomeData(cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_HOME_DATA,
        data: {
          cityId
        },
        success(data) {
          resolve({
            data,
            status: 0
          })
        },
        error(error) {
          resolve({
            status: -1,
            error
          })
        }
      })
    })
  }
}

export {
  IndexModel
}
