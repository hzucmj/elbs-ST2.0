Ext.define('App.view.SearchResult',{
	extend: 'Ext.List',
	id: 'elbs-searchresult',
	config: {
		fullscreen: true,
		itemTpl: '<div class="m-messages"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="50"><div class="m-message-left"><div class="m-message-profile"><img src="' + WEBPATH + '/images/avatar/{photo}" width="50" height="50"></div></div></td><td><div class="m-message-right"><div class="m-message-author"><span class="m-username">{username}</span><span class="m-postdate">{posttime}</span></div><div class="m-message-content"><span>{content}</span></div><div class="m-message-detail"><span><img src="./images/pin-small.png" height="20" /> {location}</span></div></div></td></tr></table></div>',
		store: 'SearchStore',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: '搜索结果',
			defaults: {
				iconMask: true,
				ui: 'plain'
			},
			items: [{ 
				id: 'elbs-backToSearch',
				text: '返回',
				ui: 'back',
				align: 'left' 
			}, {
				id: 'refreshresult',
				iconCls: 'refresh',
				//text: '刷新',
				align: 'right'
			}]
		}]
	}
});