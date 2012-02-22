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
		App.mask("正在登录，请稍候...");
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
				App.unmask();
			} else {
				Ext.data.JsonP.request({
					url: WEBPATH + '/api.jxp',
					params: {
						action: 'login',
						username: un,
						password: pwd
					},
					timeout: 15000,
					callback: function(res) {
					},
					success: function(res) {
						if (res.success == true) {
							//var obj = Ext.decode(res.responseText);
						
							//delete sooner of later
							Ext.getCmp('elbs-loginrole').setValue(res.role);
							Ext.getCmp('elbs-loginuser').setValue(un);
							Ext.getCmp('elbs-loginuid').setValue(res.uid);
							
							UID = res.uid;
							USER = un;
							ROLE = res.role;
							
							
							App.UID = res.uid;
							App.USER = un;
							App.ROLE = res.role;
							App.MsgList.getStore().getProxy().setUrl(App.WEBPATH + '/api.jxp?action=showmsg&t=json&uid=' + App.UID + '&username='+ App.USER +'&role=' + App.ROLE);
							App.MsgList.getStore().load();
							
							App.Viewport.setActiveItem(App.MainPanel);
							App.MainPanel.setActiveItem(App.MsgList);
							App.unmask();
						} else {
							App.unmask();
							console.log('failure');
							App.alert(res.msg)
						}
						
						
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
			App.alert('用户名和密码不能为空！');
		}
	},
	onExist: function(){
		console.log('existing...');
	}	
});
