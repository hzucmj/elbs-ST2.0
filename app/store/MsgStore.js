Ext.define('app.store.MsgStore', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'app.model.Message',
	proxy: {
		type: 'ajax',
		url: 'http://192.168.1.101:8080/ELBS/api.jxp?action=showmsg&start=0&limit=5&t=json&uid=20120115221614983',
		reader: {
			type: 'json',
			root: 'data'
		}
	},
	init: function(){
		
	}
});
