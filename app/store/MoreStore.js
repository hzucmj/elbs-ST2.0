Ext.define('app.store.MoreStore', {
	extend: 'Ext.data.Store',
	config: {
		autoLoad: true,
		model: 'app.model.MoreItem',
		data: [
	       {"name" : "设置", "icon":'setting',"needsIcon":true},
	       {"name" : "关于","icon":'about',"needsIcon":true},
	       {"name" : "退出","icon":'exit',"needsIcon":true}
       ]
	}
});
