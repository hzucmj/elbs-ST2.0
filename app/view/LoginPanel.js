Ext.define('app.view.LoginPanel', {
	extend: 'Ext.Panel',
	id: 'elbs-loginpanel',
	config: {
		//fullscreen: true,
		//alias: 'widget.loginpanel',
		padding: '20%',
		items: [{
			xtype: 'textfield',
			fieldLabel: '用户名',
			value: 'hzucmj'
		}, {
			xtype: 'passwordfield',
			fieldLabel: '密码',
			value: 'hzucmj'
		}, {
			xtype: 'button',
			id: 'loginbutton',
			text: '登录'
		}, {
			xtype: 'button',
			id: 'existbutton',
			text: '退出'
		}]
	}
});
