Ext.define('App.controller.MainController', {
	extend: 'Ext.app.Controller',
	
	//controllers: ['LoginPanel', 'Main', 'MsgList'],
	
	init: function(){
		
		App.WEBPATH = 'http://192.168.2.1:8080/elbs';
		App.UID = '';
		App.USER = '';
		App.ROLE = '';
		
		App.Viewport = Ext.create('App.view.Viewport');
		App.LoginPanel = Ext.create('App.view.LoginPanel');
		App.MainPanel= Ext.create('App.view.MainPanel');
		App.AboutPanel = Ext.create('App.view.AboutPanel');
		App.PostPanel = Ext.create('App.view.PostPanel');
		

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