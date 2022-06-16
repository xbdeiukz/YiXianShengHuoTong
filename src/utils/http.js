import axios from 'axios'
import qs from 'qs'

class HTTP {
  axiosPost(opt) {
    axios({
      url: opt.url,
      method: 'post',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(opt.data)
    }).then((res) => {
      opt.success(res)
    }).catch((err) => {
      opt.error(err)
    })
  }
}

export {
  HTTP
}
