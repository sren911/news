'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		name
	} = event
	
	const list = await db.collection('article').aggregate().match({
		classify: name
	}).project({
		context: false
	}).end()
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
