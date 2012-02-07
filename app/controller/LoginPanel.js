Ext.define('app.controller.LoginPanel', {
	extend: 'Ext.app.Controller',
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
		Ext.getCmp('elbs-viewport').setActiveItem(1);
	},
	onExist: function(){
		//navigator.app.existApp();
		console.log('existing...');
	}	
});
