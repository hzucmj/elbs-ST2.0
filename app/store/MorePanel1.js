Ext.define('app.store.MorePanel', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'app.model.MorePanel',
	data: [
		{"name" : "设置", "icon":'setting',"needsIcon":true},
		{"name" : "关于","icon":'about',"needsIcon":true},
		{"name" : "退出","icon":'exit',"needsIcon":true}
	],
    sorters: 'name',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    }
});
