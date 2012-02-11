Ext.define('App.view.SearchPanel', {
	extend: 'Ext.Panel',
	id: 'elbs-searchpanel',
	config: {
		title: '搜索',
		iconCls: 'search',
		padding: 15,
		items: [{
			docked: 'top',
			xtype: 'navigationbar',
			title: '搜索'
		}, {
			xtype: 'fieldset',
			defaults: {
				xtype: 'textfield'
			},
			items: [{
				id: 'elbs-searchtype',
				xtype: 'selectfield',
				name: 'searchtype',
				fieldLabel: '搜索方式',
				options: [{
					text: '按用户',
					value: 'byUser'
				}, {
					text: '按关键词',
					value: 'byKeyword'
				}, {
					text: '按时间',
					value: 'byDate'
				}]
			}, {
				xtype: 'selectfield',
				fieldLabel: '部门列表',
				options: [{
					text: 'dept1'
				}, {
					text: 'dept2'
				}]
			}, {
				xtype: 'selectfield',
				fieldLabel: '用户列表',
				options: [{
					text: 'User 1',
					value: 'User Id'
				}, {
					text: 'User 1',
					value: 'User Id'
				}, {
					text: 'User 1',
					value: 'User Id'
				}, {
					text: 'User 1',
					value: 'User Id'
				}, {
					text: 'User 1',
					value: 'User Id'
				}, {
					text: 'User 1',
					value: 'User Id'
				}]
			}, {
				fieldLabel: '关键词'
			}, {
				xtype: 'datepickerfield',
				fieldLabel: '开始时间'		
			}, {
				xtype: 'datepickerfield',
				fieldLabel: '结束时间'
			}]
		}, {
			xtype: 'button',
			text: '提交查询',
			ui: 'confirm'
		}]
	}
});
