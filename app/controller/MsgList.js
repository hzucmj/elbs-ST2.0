Ext.define('App.controller.MsgList', {
	extend: 'Ext.app.Controller',
	config: {},
	
	init: function(){
		this.control({
			'#elbs-msglist': {
				'itemtap': this.onItemtap,
				'itemtouchstart': this.onItemtouchstart,
				'itemtouchend': this.onItemtouchend
			},
			'#newmsgbtn': {
				'tap': this.onPostNew
			},
			'#refreshbtn': {
				'tap': this.onRefresh
			}
		});
	},
	onPostNew: function() {
		console.log("PostPanel showing...");
		App.Viewport.setActiveItem(App.PostPanel);
	},
	onRefresh: function(){
		console.log("refreshing the msg list...");
		var obj = Ext.getCmp('elbs-msglist');
		if (obj) {
			obj.getStore().load();
		}
	},
	onItemTap: function(dataview, index, target, record, e){
		console.log("show detail of message...");
	},
	onItemtouchstart: function() {
		
	},
	onItemtouchend: function() {
		
	}
});