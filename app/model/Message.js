Ext.define('App.model.Message', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['mid', 'uid', 'username', 'nickname', 'content', 'photo', 'image', 'video', 'music', 'location', 'posttime']
	}
});