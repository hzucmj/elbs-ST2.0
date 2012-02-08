Ext.define('App.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {},
	init: function(){
		this.control({
			"morelist": {
				'itemtap': function(dataview, index){
					if (index == 0) {
						
					} else if (index == 1) {
						console.log('about');
						App.Viewport.setActiveItem(App.AboutPanel);
					} else if (index == 2) {
						
					}
				}
			}
		});
	}
});
