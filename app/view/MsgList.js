Ext.define('App.view.MsgList', {
	extend: 'Ext.List',
	id: 'elbs-msglist',	
	config: {
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},	
		fullscreen: true,
		itemTpl: '<div id="m-all-messages"><tpl for="."><div class="m-messages"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="50"><div class="m-message-left"><div class="m-message-profile"><img src="' + WEBPATH + '/images/avatar/{photo}" width="50" height="50"></div></div></td><td><div class="m-message-right"><div class="m-message-author"><span class="m-username">{username}</span><span class="m-postdate">{posttime}</span></div><div class="m-message-content"><span>{content}</span><br /><span><img src="http://st.map.soso.com/api?size=200*100&center=114.42522,23.043023&zoom=15&markers=114.42522,23.043023" width=“200” /></span></div><div class="m-message-detail"><span><img src="./images/pin-small.png" height="20" /> {location}</span></div></div></td></tr></table></div></tpl></div>',
		store: 'MsgStore',
		title: '首页',
		iconCls: 'home',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: '首页',
			defaults: {
				iconMask: true,
				ui: 'plain'
			},
			items: [{ 
				id: 'newmsgbtn',
				iconCls: 'compose',
				//text: '新消息', 
				align: 'left' 
			}, {
				id: 'refreshbtn',
				iconCls: 'refresh',
				//text: '刷新',
				align: 'right'
			}]
		}]
	}
});