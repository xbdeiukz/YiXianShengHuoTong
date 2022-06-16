let cityInfo = {
  field: 'all',
  cityId: '0',
  cityName: '全部',
}

try {
  if (localStorage.cityInfo) {
    cityInfo = JSON.parse(localStorage.cityInfo);
  }
} catch(e) {

}

export default cityInfo
