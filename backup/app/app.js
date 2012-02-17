PATH = 'http://192.168.1.101:8080/ELBS';
//用户全局变量
UID = '20120115221614983';
START = 0;
LIMIT = 25;
Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
	name: 'App',
	appFolder: 'app',
	/*icon: 'resources/img/icon.png',
    glossOnIcon: false,
    phoneStartupScreen: 'resources/img/phone_startup.png',
    tabletStartupScreen: 'resources/img/tablet_startup.png',
    */
	//models: ['Message'],
	
	/*views: ['Viewport', 'MainPanel', 'LoginPanel', 'AboutPanel', 'MsgList', 'PostPanel'],
	
	controllers: ['LoginPanel', 'Main', 'MsgList'],
	
	stores: ['MsgStore'],*/
	
    controllers: ['MainController','LoginPanel', 'Main', 'MsgList'],
    stores: ['MsgStore'],
	//store: ['More'],

	//launch: function(){
		//Ext.create('app.view.Viewport');
	//}
	init: function() {
		//alert('hello');
	}
});
