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
				'tap': this.onLoadProfile
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
		console.log('Loading profile...');
		var bool = Ext.getCmp('elbs-isLoadProfile');
		if (bool.getValue() == 'false') {
			if (App.UID != '') {
				Ext.Ajax.request({
					url: App.WEBPATH + '/api.jxp',
					method: 'post',
					params: {
						action: 'profile',
						uid: App.UID
					},
					success: function(res) {
						var obj = Ext.decode(res.responseText);
						var info = obj.info[0];
						bool.setValue('true');
						var imgSrc = App.WEBPATH + '/images/avatar/' + info.photo;
						Ext.getCmp('elbs-useravatar').setHtml('<div style="text-align:center;"><img style="padding: 50px auto 10px auto;" src="' + imgSrc + '" width=100 height=100 /></div>');
						var b = info.birthday.split('-');
						console.log(info.birthday + "/" + b[2] + "//" + b[1] + "//" + b[0]);
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
					},
					failure: function(res) {
						alert('数据加载失败，请刷新重试！')
					}
				});
			}
		}
	},
	onSaveProfile: function() {
		console.log('Saving profile...');
		App.UserPanel.submit({
			url: App.WEBPATH + '/api.jxp?action=updateuser',
			success: function() {
				alert('success');
			},
			failure: function() {
				alert('failure');
			}
		})
	}
});