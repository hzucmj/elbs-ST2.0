Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
	name: 'app',
	icon: 'resources/img/icon.png',
    glossOnIcon: false,
    phoneStartupScreen: 'resources/img/phone_startup.png',
    tabletStartupScreen: 'resources/img/tablet_startup.png',
    
	models: [],
	
	views: ['MainPanel', 'LoginPanel'],
	
	controllers: [],

	launch: function(){
		Ext.create('app.view.LoginPanel');
		// Ext.create('app.views.MainPanel');
	}
});
