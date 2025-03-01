import request from './config.js';

export function getChatMsg(data){
	return request({
	    url: '/chat',
	    method: 'POST',
	    data,
	});
}