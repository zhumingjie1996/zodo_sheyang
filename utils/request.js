// const token = 
const BASEURL = 'http://58.215.219.74:8104/smart-api'
function request(url, method, data){
    return uni.request({
        url: BASEURL + url,
        method,
        data
    })
}
export default request