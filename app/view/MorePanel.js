Ext.define('App.view.MorePanel', {
	extend: 'Ext.dataview.List',
	id: 'elbs-morelist',
	config: {
		title: '更多',
		iconCls: 'more',
		padding: '10 15 10 15',
		cls: 'list2',
		itemCls: 'list2_item',
		itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="./images/{icon}.png" align="absmiddle" /></tpl>{name}',
		store: Ext.create('Ext.data.Store', {
		     fields: ['name','icon','needsIcon'],
		     data: [
		            {"name" : "设置", "icon":'setting',"needsIcon":true},
		            {"name" : "关于","icon":'about',"needsIcon":true},
		            {"name" : "注销登录","icon":'exit',"needsIcon":true}
		     ]
		}),
		items: [{
			docked: 'top',
			xtype: 'titlebar',
			title: '更多'
		}]
	},
	initialize: function(){
		this.callParent();
	}
});
