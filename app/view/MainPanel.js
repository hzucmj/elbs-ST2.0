Ext.define('App.view.MainPanel', {
	extend: 'Ext.tab.Panel',
	fullscreen: true,
	config: {
		id: 'elbs-mainpanel',
		name: 'elbs-mainpanel',
		tabBarPosition: 'bottom',
	
		//defaults: {
			//scrollable: true
		//}
		/*,

		items: [
			Ext.create('app.view.MsgList'),
			Ext.create('app.view.SearchPanel'), 
			Ext.create('app.view.InfoPanel'),
			Ext.create('app.view.UserPanel'),
			Ext.create('app.view.MorePanel')
		]*/
	}	
});
