Ext.define('app.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {},
	init: function(){
		this.control({
			"morelist": {
				'itemtap': function(dataview, index){
					if (index == 0) {
						
					} else if (index == 1) {
						console.log('about');
						Ext.getCmp('elbs-viewport').setActiveItem(2);
					} else if (index == 2) {
						
					}
				}
			}
		});
	}
});
