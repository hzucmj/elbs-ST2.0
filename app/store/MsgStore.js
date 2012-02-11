Ext.define('App.store.MsgStore', {
	extend: 'Ext.data.Store',
	autoLoad: false,
	model: 'App.model.Message',
	proxy: {
		type: 'ajax',
		url: WEBPATH + '/api.jxp?action=showmsg&t=json&uid=' + UID,
		reader: {
			type: 'json',
			root: 'data'
		},
		pageSize: LIMIT
	},
	initialize: function(){
		this.callParent();
	}
});
