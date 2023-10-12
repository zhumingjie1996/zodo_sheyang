import request from '@/utils/request.js'
export default{
	login:(params)=>{
		return request('/system/auth/getToken', 'post', params)
	}
}