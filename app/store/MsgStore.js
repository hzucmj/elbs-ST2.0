Ext.define('app.store.MsgStore', {
	extend: 'Ext.data.Store',
	config: {
		autoLoad: true,
		model: 'app.model.Message',
		data: [
			{mid: 'mid',uid: 'uid', username: 'username',nickname: 'nickname',content: 'content',avatar: 'avatar',image: 'image',video: 'video',music: 'music',location: 'location',posttime: 'posttime'},
			{mid: 'mid',uid: 'uid', username: 'username',nickname: 'nickname',content: 'content',avatar: 'avatar',image: 'image',video: 'video',music: 'music',location: 'location',posttime: 'posttime'},
			{mid: 'mid',uid: 'uid', username: 'username',nickname: 'nickname',content: 'content',avatar: 'avatar',image: 'image',video: 'video',music: 'music',location: 'location',posttime: 'posttime'},
		]
	}
});
