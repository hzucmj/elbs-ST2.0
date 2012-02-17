Ext.define('App.view.UserPanel', {
	extend: 'Ext.form.Panel', 
	id: 'elbs-userpanel',
	config: {
		title: '个人资料',
		iconCls: 'user',
		items: [{
			xtype: 'panel',
			defaults: {
				labelWidth: 75
			},
			items: [{
				id: 'elbs-useravatar',
				xtype: 'panel',
				name: 'useravatar',
				html: '<div style="text-align:center;"><img style="padding: 50px auto 10px auto;" src="./images/profile.jpg" width=100 height=100 /></div>'
			}, {
				xtype: 'fieldset',
				items: [{
					name: 'username',
					xtype: 'textfield',
					label: '用户名'
				}, {
					name: 'email',
					xtype: 'emailfield',
					label: '邮箱'
				}, {
					name: 'nickname',
					xtype: 'textfield',
					label: '昵称'
				}, {
					xtype: 'selectfield',
					id: 'sex',
					name : 'sex',
					label: '性别',
					options: [{
						text: '男',
						value: 'm'
					}, {
						text: '女',
						value: 'f'
					}]
				}, {
					name: 'birthday',
					xtype: 'datepickerfield',
					label: '生日'
				}, {
					name: 'department',
					xtype: 'textfield',
					label: '部门',
					value: 'hello'
				}, {
					name: 'contact',
					xtype: 'textfield',
					label: '联系方式'
				}, {
					id: 'elbs-isLoadProfile',
					xtype: 'hiddenfield',
					value: 'false'
				}]
			}, {
				xtype: 'panel',
				layout: 'hbox',
				//margin: '0 0 0 5',
				defaults: {
					xtype: 'button',
					margin: '0 0 0 5'
				},
				items: [{
					id: 'elbs-saveprofile',
					text: '保存',
					ui: 'decline',
					width: 100
				}/*, {
					text: '取消',
					ui: 'confirm',
					width: 100
				}*/]
			}]
		}, {
			xtype: 'titlebar',
			docked: 'top',
			title: '个人资料',
			defaults: {
				iconMask: true
			},
			items: [/*{
				xtype: 'button',
				id: 'saveprofile',
				text: '保存',
				align: 'left'			
			}, */{
				xtype: 'button',
				id: 'elbs-refreshprofile',
				text: '刷新',
				align: 'right'
			}]
		}]
	},
	initialize: function() {
		console.log("userpanel showing...");
		this.callParent();
	}
});
