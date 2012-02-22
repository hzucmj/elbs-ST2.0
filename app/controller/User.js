Ext.define('App.controller.User', {
	extend: 'Ext.app.Controller', 
	config: {
	},
	init: function() {
		this.control({
			'#elbs-userpanel': {
				'activate': this.onLoadProfile
			}, 
			'#elbs-refreshprofile': {
				'tap': this.onRefreshProfile
			},
			'#elbs-saveprofile': {
				'tap': this.onSaveProfile
			}
		});
	},
	onRefreshProfile: function() {
		Ext.getCmp('elbs-isLoadProfile').setValue('false');
		this.onLoadProfile();
	},
	onLoadProfile: function() {
		
		var bool = Ext.getCmp('elbs-isLoadProfile');
		if (bool.getValue() == 'false') {
			App.mask('正在加载个人信息...');
			console.log('Loading profile...');
			if (App.UID != '') {
				Ext.data.JsonP.request({
					url: App.WEBPATH + '/api.jxp',
					method: 'post',
					params: {
						action: 'profile',
						uid: App.UID
					},
					success: function(res) {
						App.unmask();
						if (res.success == true) {
							//var obj = Ext.decode(res.responseText);
							var info = res.info[0];
							bool.setValue('true');
							var imgSrc = App.WEBPATH + '/images/avatar/' + info.photo;
							Ext.getCmp('elbs-useravatar').setHtml('<div style="text-align:center;"><img style="padding: 50px auto 10px auto;" src="' + imgSrc + '" width=100 height=100 /></div>');
							var b = info.birthday.split('-');
							App.UserPanel.setValues({
								username: info.username,
								email: info.email,
								nickname: info.nickname,
								sex: info.sex,
								birthday: {
									year: b[0],
									month: b[1],
									day: b[2]
								},
								department: info.department,
								contact: info.contact
							});
						} else {
							App.alert('数据加载失败，请刷新重试！');
						}
						
					},
					failure: function(res) {
						App.unmask();
						alert('数据加载失败，请刷新重试！')
					}
				});
			}
		}
	},
	onSaveProfile: function() {
		App.mask('正在更新个人信息，请稍候...');
		console.log('Saving profile...');
		Ext.util.JSONP.request({
			url: App.WEBPATH + '/api.jxp?action=updateuser',
			headers: { 'Content-Type': 'application/json;utf-8' },
			params: {
				username: Ext.getCmp('elbs-p-username').getValue(),
				email: Ext.getCmp('elbs-p-email').getValue(),
				nickname: Ext.getCmp('elbs-p-nickname').getValue(),
				sex: Ext.getCmp('elbs-p-sex').getValue(),
				birthday: Ext.getCmp('elbs-p-birthday').getValue(),
				department: Ext.getCmp('elbs-p-department').getValue(),
				contact: Ext.getCmp('elbs-p-contact').getValue()
			},
			success: function(res) {
				App.unmask();
				if (res.success == true) {
					alert('success');
				} else {
					alert('failure');
				}
				
			},
			failure: function() {
				App.unmask();
				alert('failure');
			}
		})
	}
});