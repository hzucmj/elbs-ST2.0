Ext.define('App.controller.LoginPanel', {
	extend: 'Ext.app.Controller',
	views: ['LoginPanel'],
	config: {
		
	},
	init: function(){
		this.control({
			'#loginbutton': {
				'tap': this.onLogin
			},
			'#existbutton': {
				'tap': this.onExist
			}
		});
	},
	onLogin: function(){
		console.log('logining...');
		App.Viewport.setActiveItem(App.MainPanel);
	},
	onExist: function(){
		console.log('existing...');
	}	
});
