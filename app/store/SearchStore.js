Ext.define('App.store.SearchStore', {
	extend: 'Ext.data.Store',
	id: 'elbs-searchstore',
	autoLoad: true,
	config: {
		model: 'App.model.Message',
		proxy: {
			type: 'jsonp',
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
