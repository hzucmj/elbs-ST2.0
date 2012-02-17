Ext.define('App.controller.MainPanel', {
	extend: 'Ext.app.Controller',
	
	views: ['MainPanel'],
	
	init: function(){
		this.control({
			'#elbs-mainpanel': {
				'activeitemchange': function(p, v, ov) {
					console.log("activeItem: " + v.id);
				}
			}
		});
	}
});
