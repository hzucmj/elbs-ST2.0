Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
	name: 'app',
	icon: 'resources/img/icon.png',
    glossOnIcon: false,
    phoneStartupScreen: 'resources/img/phone_startup.png',
    tabletStartupScreen: 'resources/img/tablet_startup.png',
    
	//model: ['More'],
	
	views: ['Viewport', 'MainPanel', 'LoginPanel', 'AboutPanel', 'MsgList'],
	
	controllers: ['LoginPanel', 'Main'],
	
	//store: ['More'],

	launch: function(){
		
		var PATH = 'http://localhost:8080/InfoMonitor';
		//用户全局变量
		var UID = '20120115221614983';
		var START = 0;
		var LIMIT = 25;
		
		Ext.create('app.view.Viewport');
	}
});
