Ext.define('App.view.MsgList', {
	extend: 'Ext.dataview.List',
	name: 'MsgList',
	id: 'elbs-msglist',
	config: {
		title: '首页',
		iconCls: 'home',
		store: 'MsgStore',
		masked: {
		    xtype: 'loadmask',
		    message: 'My message'
		},
		items: [{
			docked: 'top',
			xtype: 'navigationbar',
			title: '首页',
			defaults: {
				iconMask: true,
				ui: 'plain'
			},
			items: [
				{ 
					id: 'newmsgbtn',
					iconCls: 'compose',
					//text: '新消息', 
					align: 'left' 
				}, {
					id: 'refreshbtn',
					iconCls: 'refresh',
					//text: '刷新',
					align: 'right'
				}
			]
		}],
		itemTpl: '<div class="m-messages"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="50"><div class="m-message-left"><div class="m-message-profile"><img src="{avatar}" width="50" height="50"></div></div></td><td><div class="m-message-right"><div class="m-message-author"><span class="m-username">{username}</span><span class="m-postdate">{posttime}</span></div><div class="m-message-content"><span>{content}</span></div><div class="m-message-detail"><span>来自：{location}</span></div></div></td></tr></table></div>'
	}
});