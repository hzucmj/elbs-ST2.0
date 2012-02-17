Ext.define('App.store.MsgStore', {
	extend: 'Ext.data.Store',
	id: 'elbs-msgstore',
	autoLoad: true,
	config: {
		model: 'App.model.Message',
		proxy: {
			type: 'ajax',
			url: '',
			reader: {
				type: 'json',
				rootProperty: 'data'
			},
			pageSize: 25
		}		
	},
	initialize: function(){
		this.callParent();
	}
});
