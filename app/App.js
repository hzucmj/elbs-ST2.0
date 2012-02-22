WEBPATH='http://192.168.2.1:8080/elbs';
//用户全局变量
//UID = '20111027001719408';
UID='';
USER='';
ROLE='';
START = 0;
LIMIT = 50;
MsgObj = {};

Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
	name: 'App',
	appFolder: 'app',
    /*glossOnIcon: false,
    phoneStartupScreen: 'resources/img/phone_startup.png',
    tabletStartupScreen: 'resources/img/tablet_startup.png',
    */
	views: ['Viewport', 'MainPanel', 'LoginPanel', 'AboutPanel', 'MsgList', 'PostPanel', 'SearchPanel', 'InfoPanel', 'UserPanel', 'MorePanel', 'SearchResult'],
	models: ['Message'],
    controllers: ['MainController','LoginPanel', 'MoreController', 'MsgList', 'MainPanel', 'User', 'SearchController'],
    stores: ['MsgStore', 'SearchStore'],
    
	launch: function() {
		
	}
});
