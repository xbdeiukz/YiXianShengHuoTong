const BASE_URL = 'http://study.jsplusplus.com/Yixiantong/'

const API = {
  GET_HOME_DATA: BASE_URL + 'getHomeDatas',
  GET_LIST_DATA: BASE_URL + 'getListDatas',
  GET_DETAIL_DATA: BASE_URL + 'getDetail',
  SEARCH_ACTION_DATA: BASE_URL +   'searchAction'
}

export default {  // 之所以导出为一个对象，是因为之后可能还有其它配置
  API
}
