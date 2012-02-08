Ext.define('App.view.UserPanel', {
	extend: 'Ext.Panel', 
	id: 'elbs-userpanel',
	config: {
		title: '个人资料',
		iconCls: 'user',
		items: [{
			xtype: 'panel',
			padding: 15,
			defaults: {
				xtype: 'textfield',
				labelWidth: 75
			},
			items: [{
				xtype: 'panel',
				id: 'useravatar',
				html: '<div style="text-align:center;"><img style="padding: 50px auto 10px auto;" src="./images/profile.jpg" width=100 height=100 /></div>'
			}, {
				fieldLabel: '用户名'
			}, {
				xtype: 'emailfield',
				fieldLabel: '邮箱'
			}, {
				fieldLabel: '昵称'
			}, {
				xtype: 'selectfield',
				id: 'sex',
				name : 'sex',
				fieldLabel: '性别',
				options: [{
					text: '男',
					value: 'm'
				}, {
					text: '女',
					value: 'f'
				}]
			}, {
				xtype: 'datepickerfield',
				fieldLabel: '生日'
			}, {
				fieldLabel: '部门',
				value: 'hello'
			}, {
				fieldLabel: '联系方式'
			}]
		}, {
			xtype: 'navigationbar',
			docked: 'top',
			title: '个人资料',
			defaults: {
				iconMask: true
			},
			items: [{
				xtype: 'button',
				id: 'saveprofile',
				text: '保存',
				align: 'right'			
			}]
		}, {
			xtype: 'panel',
			layout: 'hbox',
			margin: '0 0 0 15',
			defaults: {
				xtype: 'button',
				margin: 5
			},
			items: [{
				text: '保存',
				ui: 'decline',
				width: 100
			}, {
				text: '取消',
				ui: 'confirm',
				width: 100
			}]
		}]
	},
	initialize: function() {
		console.log("userpanel showing...");
		this.callParent();
	}
});
