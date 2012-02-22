Ext.define('App.controller.MoreController', {
	extend: 'Ext.app.Controller',
	config: {},
	init: function(){
		this.control({
			"#elbs-morelist": {
				'itemtap': function(dataview, index){
					if (index == 0) {
						
					} else if (index == 1) {
						console.log('about');
						App.Viewport.setActiveItem(App.AboutPanel);
					} else if (index == 2) {
						App.Viewport.setActiveItem(App.LoginPanel);
						App.UID = '';
						App.USER = '';
						App.ROLE = '';
						Ext.getCmp('elbs-isLoadProfile').setValue('false');
					}
				}
			}
		});
	}
});
