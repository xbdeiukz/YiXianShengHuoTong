import { HTTP } from 'utils/http'
import config from 'utils/config'

class ListModel extends HTTP {
  getListData(cityId, field) {
    return new Promise((resolve, rejcet) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATA,
        data: {
          cityId,
          field
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
  ListModel
}
