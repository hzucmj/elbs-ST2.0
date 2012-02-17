Ext.define('App.view.LoginPanel', {
	extend: 'Ext.Panel',
	id: 'elbs-loginpanel',
	config: {
		fullscreen: true,
		//alias: 'widget.loginpanel',
		padding: '20%',
		margin: '50 0 0 0',
		items: [{
			xtype: 'image',
			width: 200,
			height: 200,
			src: './images/kgeography.png'
		}, {
			xtype: 'fieldset',
			items: [{
				id: 'elbs-username',
				xtype: 'textfield',
				label: '用户名',
				value: 'hzucmj'
			}, {
				id: 'elbs-password',
				xtype: 'passwordfield',
				label: '密码',
				value: 'hzucmj'
			}]
		}, {
			id: 'elbs-loginbutton',
			xtype: 'button',
			text: '登录',
			margin: '10 0 0 0',
			ui: 'confirm'
		}, {
			xtype: 'panel',
			//hidden: true,
			defaults: {
				xtype: 'hiddenfield'
			},
			items: [{
				id: 'elbs-webpath',
				value: ''
			}, {
				id: 'elbs-loginrole',
				value: ''
			}, {
				id: 'elbs-loginuser',
				value: ''
			}, {
				id: 'elbs-loginuid',
				value: ''
			}]
		}]
	}
});
