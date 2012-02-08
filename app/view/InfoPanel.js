Ext.define('App.view.InfoPanel', {
	extend: 'Ext.Panel',
	config: {
		title: '信息',
		iconCls: 'info',
		items: [{
			docked: 'top',
			xtype: 'navigationbar',
			title: '信息',
			items: [{
				text: '刷新',
				align: 'right'
			}]
		}]
	}
});
