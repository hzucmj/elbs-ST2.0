Ext.define('App.controller.MainController', {
	extend: 'Ext.app.Controller',
	
	//controllers: ['LoginPanel', 'Main', 'MsgList'],
	
	init: function(){
		
		
		App.WEBPATH = 'http://192.168.2.1:8080/elbs';
		App.UID = '';
		App.USER = '';
		App.ROLE = '';
		
		App.isBlank = function(s) {
			if (Ext.String.trim(s) == '') {
				return true;
			}
			return false;
		}

		var intervalCounter = 0;
		hideToast = function(){
			var toast = Ext.get('toast');
			toast.style.opacity = 0;
			clearInterval(intervalCounter);
		}
		
		App.alert = function(msg, fn, title, btnText) {
			title = title == null ? '提示' : title;
			btnText = btnText == null ? '确定' : btnText; 
			navigator.notification.alert(msg, fn, title, btnText);
		}
		
		App.mask = function(msg) {
			App.Viewport.setMasked({
				xtype: 'loadmask',
				message: msg,
				indicator: false
			});
		}
		App.unmask = function() {
			App.Viewport.setMasked(false);
		}
		
		App.Viewport = Ext.create('App.view.Viewport');
		App.LoginPanel = Ext.create('App.view.LoginPanel');
		App.MainPanel= Ext.create('App.view.MainPanel');
		App.AboutPanel = Ext.create('App.view.AboutPanel');
		App.PostPanel = Ext.create('App.view.PostPanel');
		App.SearchResult = Ext.create('App.view.SearchResult');

		App.MsgList = Ext.create('App.view.MsgList');
		App.SearchPanel = Ext.create('App.view.SearchPanel');
		App.InfoPanel = Ext.create('App.view.InfoPanel');
		App.UserPanel = Ext.create('App.view.UserPanel');
		App.MorePanel = Ext.create('App.view.MorePanel');
		
		App.DetailPanel = Ext.create('App.view.DetailPanel');
		
		App.MainPanel.add([App.MsgList, App.SearchPanel, App.InfoPanel, App.UserPanel, App.MorePanel]);
		
		Ext.getCmp('elbs-webpath').setValue('http://192.168.2.1:8080/elbs');
		
		
		
		
		//App.Viewport.setActiveItem(App.MainPanel);
		
		App.Viewport.setActiveItem(App.LoginPanel);
		//App.ViewPort.addItem(App.MainPanel);
		
	}
});