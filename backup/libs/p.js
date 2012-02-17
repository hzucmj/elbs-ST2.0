// 等待加载PhoneGap
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap加载完毕
function onDeviceReady() {
	// 按钮事件
	document.addEventListener("backbutton", eventBackButton, false); // 返回键
	document.addEventListener("menubutton", eventMenuButton, false); // 菜单键
	document.addEventListener("searchbutton", eventSearchButton, false); // 搜索键
}

// 返回键
function eventBackButton() {
	Ext.Msg.confirm('提示', '确认要退出吗？', function(btn) {
		if (btn == 'yes') {
			navigator.app.exitApp();
		}
	});
}
// 菜单键
function eventMenuButton() {
	Ext.Msg.alert('MenuButton');
}
// 搜索键
function eventSearchButton() {
	Ext.Msg.alert('SearchButton');
}