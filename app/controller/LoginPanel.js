Ext.define('App.controller.LoginPanel', {
	extend: 'Ext.app.Controller',
	views: ['LoginPanel'],
	config: {
		
	},
	init: function(){
		this.control({
			'#elbs-loginbutton': {
				'tap': this.onLogin
			}/*,
			'#existbutton': {
				'tap': this.onExist
			}*/
		});
	},
	onLogin: function(){
		Ext.Viewport.setMasked({
			xtype: 'loadmask',
			message: '正在登录，请稍候...',
			indicator: false
		});
		console.log('logining...');
		var un = Ext.getCmp('elbs-username').getValue();
		var pwd = Ext.getCmp('elbs-password').getValue();
		var WEBPATH = Ext.getCmp('elbs-webpath').getValue();
		if (un != "" && pwd != null) {
			if (un == 'admin' && pwd == 'admin') {
				Ext.getCmp('elbs-loginuser').setValue(un);
				Ext.getCmp('elbs-loginuid').setValue('20120215194144039');
				Ext.getCmp('elbs-loginrole').setValue('ROLE_MASTER');
				App.Viewport.setActiveItem(App.MainPanel);
			} else {
				Ext.Ajax.request({
					url: WEBPATH + '/api.jxp',
					params: {
						action: 'login',
						username: un,
						password: pwd
					},
					timeout: 30000,
					success: function(res) {
						console.log('success');
						console.log(res);
						var obj = Ext.decode(res.responseText);
						Ext.getCmp('elbs-loginrole').setValue(obj.role);
						Ext.getCmp('elbs-loginuser').setValue(un);
						Ext.getCmp('elbs-loginuid').setValue(obj.uid);
						
						UID = obj.uid;
						USER = un;
						ROLE = obj.role;
						
						
						App.UID = obj.uid;
						App.USER = un;
						App.ROLE = obj.role;
						//Ext.getCmp('elbs-msglist').getStore().getProxy().setUrl(WEBPATH + '/api.jxp?action=showmsg&t=json&uid=' + UID + '&username='+ USER +'&role=' + ROLE);
						App.MsgList.getStore().getProxy().setUrl(App.WEBPATH + '/api.jxp?action=showmsg&t=json&uid=' + App.UID + '&username='+ App.USER +'&role=' + App.ROLE);
						/*UID = result.uid;
						uname = Ext.getCmp('username').value;
						loginform.setMasked(false);
						//Ext.Msg.alert(result.msg);*/
						App.MsgList.getStore().load();
						
						App.Viewport.setActiveItem(App.MainPanel);
						App.MainPanel.setActiveItem(App.MsgList);
						Ext.Viewport.setMasked(false);
						
					}, 
					failure: function(res) {
						Ext.Viewport.setMasked(false);
						console.log('failure');
						console.log(res);
						var obj = Ext.decode(res.responseText);
						alert(obj.msg);
					}
				});
			}
		} else {
			alert('用户名和密码不能为空！');
		}
	},
	onExist: function(){
		console.log('existing...');
	}	
});
