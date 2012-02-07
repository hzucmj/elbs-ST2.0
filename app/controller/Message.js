Ext.define('app.model.Message', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['mid', 'uid', 'username', 'nickname', 'content', 'avatar', 'image', 'video', 'music', 'location', 'posttime']
	}
});