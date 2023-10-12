const BASEURL = 'http://58.215.219.74:8104/smart-api'
let TOKEN = ''
const whiteApi = ['/system/auth/getToken']
uni.getStorage({
    key: 'zodo_token',
    success: (res) => {
        TOKEN = res.data
    }
})
function request(url, method, data){
    return uni.request({
        url: BASEURL + url,
        method,
        data
    })
}
export default request