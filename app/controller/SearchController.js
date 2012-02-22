Ext.define('App.controller.SearchController', {
	extend: 'Ext.app.Controller',
	config: {},
	init: function() {
		this.control({
			'#elbs-searchpanel': {
				'activate': this.onActivate 
			},
			'#elbs-searchtype': {
				'change': this.onChangeType
			},
			'#elbs-searchbtn': {
				'tap': this.onSearch
			},
			'#elbs-backToSearch': {
				'tap': this.onBackToSearch
			}
		});
	},
	onActivate: function() {
		Ext.getCmp('elbs-searchtype').setValue('byKeyword');
		Ext.getCmp('elbs-keyword').setValue('');
		Ext.getCmp('elbs-userlist').setValue('');
		Ext.getCmp('elbs-departmentlist').setValue('');
		Ext.getCmp('elbs-startdate').setValue('');
		Ext.getCmp('elbs-enddate').setValue('');
	},
	onChangeType: function(me, newValue, oldValue, eOpts) {
		this.enableComp(me, me.getValue());
		if (me.getValue() != null) {
			/*App.Viewport.setMasked({
				xtype: 'loadmask',
				message: '正在加载数据...',
				indicator: false
			});*/
			App.mask('正在加载数据...');
			App.unmask();
			/*Ext.ajax.request({
				url: 
			})*/
			
		}
	},
	enableComp: function(obj, value) {
		var keyword = Ext.getCmp('elbs-keyword');
		var userlist = Ext.getCmp('elbs-userlist');
		var deptlist = Ext.getCmp('elbs-departmentlist');
		var startdate = Ext.getCmp('elbs-startdate');
		var enddate = Ext.getCmp('elbs-enddate');
		if (App.ROLE == 'ROLE_USER') {
			if (value != 'byKeyword') {
				App.alert('你所在用户组只能进行关键词搜索', function(){
					obj.setValue('byKeyword');
				});
				return
			}
		}
		
		if (value == 'byKeyword') {
			keyword.enable();
			userlist.disable();
			deptlist.disable();
			startdate.disable();
			enddate.disable();
		} else if (value == 'byUser') {
			keyword.disable();
			userlist.enable();
			deptlist.disable();
			startdate.disable();
			enddate.disable();
		} else if (value == 'byDate') {
			keyword.disable();
			userlist.disable();
			deptlist.disable();
			startdate.enable();
			enddate.enable();
		} else if (value == 'byDepartment') {
			keyword.disable();
			userlist.disable();
			deptlist.enable();
			startdate.disable();
			enddate.disable();
		} else {
			return
		}
	},
	onSearch: function() {
		var keyword = Ext.getCmp('elbs-keyword').getValue();
		var userlist = Ext.getCmp('elbs-userlist').getValue();
		var deptlist = Ext.getCmp('elbs-departmentlist').getValue();
		var startdate = Ext.getCmp('elbs-startdate').getValue;
		var enddate = Ext.getCmp('elbs-enddate').getValue();
		
		var url = '';
		if (!App.isBlank(keyword)) {
			url = App.WEBPATH + '/api.jxp?action=search&searchType=keyword&uid=' + App.UID + '&t=json&username=' + App.USER + '&role=' + App.ROLE + '&keyword=' + keyword;
			var searchstore = Ext.getCmp('elbs-searchresult').getStore();
			searchstore.getProxy().setUrl(url);
			searchstore.load();
			App.Viewport.setActiveItem(App.SearchResult);
			
			
			/*Ext.ajax({
				url: App.WEBPATH + '/api.jxp?action=search&searchType=keyword&uid=' + App.UID + '&t=json&username=' + App.USER + '&role=' + App.ROLE,
				method: 'post',
				params: {
					keyword: keyword
				},
				success: function(res) {
					var obj = Ext.decode(res.responseText).data;
					
				},
				failure: function(res) {
					
				}
			});*/
		} else if (!App.isBlank(userlist)) {
			
		} else if (!App.isBlank(deptlist)) {
			
		} else if (!App.isBlank(startdate) && !App.isBlank(enddate)) {
			
		}
		
	},
	onBackToSearch: function() {
		App.Viewport.setActiveItem(App.MainPanel);
	}
});