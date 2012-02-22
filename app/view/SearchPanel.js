Ext.define('App.view.SearchPanel', {
	extend: 'Ext.Panel',
	id: 'elbs-searchpanel',
	config: {
		title: '搜索',
		iconCls: 'search',
		padding: 15,
		items: [{
			docked: 'top',
			xtype: 'titlebar',
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
				label: '搜索方式',
				options: [{
					text: '按用户',
					value: 'byUser'
				}, {
					text: '按关键词',
					value: 'byKeyword'
				}, {
					text: '按时间',
					value: 'byDate'
				}, {
					text: '按部门',
					value: 'byDepartment'
				}]
			}, {
				id: 'elbs-departmentlist',
				xtype: 'selectfield',
				label: '部门列表',
				options: [{
					text: 'dept1'
				}, {
					text: 'dept2'
				}]
			}, {
				id: 'elbs-userlist',
				xtype: 'selectfield',
				label: '用户列表',
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
				id: 'elbs-keyword',
				label: '关键词'
			}, {
				id: 'elbs-startdate',
				xtype: 'datepickerfield',
				label: '开始时间'		
			}, {
				id: 'elbs-enddate',
				xtype: 'datepickerfield',
				label: '结束时间'
			}]
		}, {
			id: 'elbs-searchbtn',
			xtype: 'button',
			text: '提交查询',
			ui: 'confirm'
		}]
	}
});
