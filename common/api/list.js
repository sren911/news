import $http from './http.js'
export const get_label = (data) => {
	return $http({
		url: 'get_label',
		data
	})
}

export const get_list = () => {
	return Promise((reslove, reject) => {
		reslove({data: '请求成功'})
	})
}