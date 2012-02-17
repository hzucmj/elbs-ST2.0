// 等待加载PhoneGap
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap加载完毕
function onDeviceReady() {
	//检查联网状态
	//checkConnection();
	//document.addEventListener("offline", checkConnection, false);
	
	// 按钮事件
	document.addEventListener("backbutton", eventBackButton, false); // 返回键
	document.addEventListener("menubutton", eventMenuButton, false); // 菜单键
	document.addEventListener("searchbutton", eventSearchButton, false); // 搜索键
}

function checkConnection(){
	console.log('Checking the connection state.');
	var networkState = navigator.network.connection.type;
	if (networkState == Connection.NONE) {
		navigator.notification.confirm('当前没有网络连接，是否进行网络配置？', function(btn) {
			if (btn == 1) {
				
			} else if (btn == 2) {
				navigator.app.exitApp();
			}
		}, '提示', '确定,取消');
	}
}
// 返回键
function eventBackButton() {
	/*Ext.Msg.confirm('提示', '确认要退出吗？', function(btn) {
		if (btn == 'yes') {
			navigator.app.exitApp();
		}
	});*/
	/*var exit = confirm("确认要退出吗？");
	if (exit == true) {
		navigator.app.exitApp();
	}*/
	navigator.notification.confirm("确认要退出吗？", function(btn) {
		if (btn == 1) {
			navigator.app.exitApp();
		}
	}, '提示', '确定,取消');
}
// 菜单键
function eventMenuButton() {
	//Ext.Msg.alert('MenuButton');
	//App.MenuList = 
}
// 搜索键
function eventSearchButton() {
	Ext.Msg.alert('SearchButton');
}

