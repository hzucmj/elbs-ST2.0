Ext.define('App.view.Viewport', {
	extend: 'Ext.Panel',
	
	config: {id: 'elbs-viewport',
		fullscreen : true,
		layout : {
			type : 'card',
			animation : {
				type : 'slide',
				direction : 'left',
				duration : 250
			}
		}
/*,
		items: [
			Ext.create('app.view.LoginPanel'),
			Ext.create('app.view.MainPanel'),
			Ext.create('app.view.AboutPanel'),
			Ext.create('app.view.PostPanel')
		]*/
	}
});
