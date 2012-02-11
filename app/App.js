console.log("Initializing global variable ...");
WEBPATH = 'http://192.168.1.188:8080/elbs';
//用户全局变量
UID = '20120115221614983';
START = 0;
LIMIT = 50;
MsgObj = {};

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
    controllers: ['MainController','LoginPanel', 'Main', 'MsgList'],
    stores: ['MsgStore'],
    init: function() {
    }
});
