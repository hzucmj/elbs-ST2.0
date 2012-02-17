Ext.define('App.view.LoginPanel', {
	extend: 'Ext.Panel',
	id: 'elbs-loginpanel',
	config: {
		fullscreen: true,
		//alias: 'widget.loginpanel',
		padding: '20%',
		margin: '50 10 0 10',
		items: [{
			xtype: 'image',
			width: 200,
			height: 200,
			src: './images/kgeography.png'
		}, {
			xtype: 'panel',
			items: [{
				xtype: 'textfield',
				fieldLabel: '用户名',
				value: 'hzucmj'
			}, {
				xtype: 'passwordfield',
				fieldLabel: '密码',
				value: 'hzucmj'
			}]
		}, {
			xtype: 'panel',
			layout: 'hbox',
			margin: '0 10 0 0',
			padding: '0 0 0 75',
			defaults: {
				xtype: 'button',
				width: 80
			},
			items: [{
				id: 'loginbutton',
				text: '登录',
				ui: 'decline'
			}, {
				id: 'existbutton',
				text: '退出',
				ui: 'confirm',
				margin: '0 0 0 5'
			}]
		}]
	}
});
