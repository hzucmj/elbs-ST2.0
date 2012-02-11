Ext.define('App.controller.MainController', {
	extend: 'Ext.app.Controller',
	views: ['Viewport', 'MainPanel', 'LoginPanel', 'AboutPanel', 'MsgList', 'PostPanel', 'SearchPanel', 'InfoPanel', 'UserPanel', 'MorePanel'],
	//models: ['Message'],
	//controllers: ['LoginPanel', 'Main', 'MsgList'],
	
	init: function(){
		console.log('hello');
		App.PATH = 'http://192.168.1.101:8080/ELBS';
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
		
		
		//App.Viewport.setActiveItem(App.LoginPanel);
		
		App.Viewport.setActiveItem(App.MainPanel);
		
		//App.ViewPort.addItem(App.LoginPanel);
		//App.ViewPort.addItem(App.MainPanel);
		
	}
});