Ext.define('app.view.Viewport', {
	extend: 'Ext.Panel',
	id: 'elbs-viewport',
	config: {
		fullscreen: true,
		layout: {
			type: 'card',
			animation: 'slide'
		},
		items: [
			//Ext.create('app.view.LoginPanel'),
			Ext.create('app.view.MainPanel'),
			Ext.create('app.view.AboutPanel')
		]
	}
});
