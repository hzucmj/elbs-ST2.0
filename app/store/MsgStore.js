Ext.define('App.store.MsgStore', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'App.model.Message',
	proxy: {
		type: 'ajax',
		url: PATH + '/api.jxp?action=showmsg&t=json&uid=20120115221614983',
		reader: {
			type: 'json',
			root: 'data'
		},
		pageSize: LIMIT
	},
	initialize: function(){
		//alert(PATH);
		this.callParent();
	}
});
