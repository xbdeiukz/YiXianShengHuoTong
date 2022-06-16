import { HTTP } from 'utils/http'
import config from 'utils/config'

class DetailModel extends HTTP {
  getDetailData(field, id) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL_DATA,
        data: {
          field,
          id
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
  DetailModel
}
