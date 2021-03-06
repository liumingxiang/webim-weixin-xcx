let RecordStatus = require("suit/audio/record_status").RecordStatus;

Component({
	properties: {
		username: {
			type: Object,
			value: {}
		}
	},
	data: {
		recordStatus: RecordStatus.HIDE,
		RecordStatus,
		__comps__: {
			main: null,
			emoji: null,
			image: null,
			location: null,
			// video: null,
		},
	},
	methods: {
		// 事件有长度限制：仅限 26 字符
		toggleRecordModal(){
			this.triggerEvent(
				"tapSendAudio",
				null,
				{
					bubbles: true,
					composed: true
				}
			);
		},

		openCamera(){
			this.data.__comps__.image.openCamera();
		},

		openEmoji(){
			this.data.__comps__.emoji.openEmoji();
		},

		cancelEmoji(){
			this.data.__comps__.emoji.cancelEmoji();
		},

		sendImage(){
			this.data.__comps__.image.sendImage();
		},

		sendLocation(){
			// this.data.__comps__.location.sendLocation();
		},

		emojiAction(evt){
			this.data.__comps__.main.emojiAction(evt.detail.msg);
		},
	},

	// lifetimes
	created(){},
	attached(){},
	moved(){},
	detached(){},
	ready(){
		let comps = this.data.__comps__;
		comps.main = this.selectComponent("#chat-suit-main");
		comps.emoji = this.selectComponent("#chat-suit-emoji");
		comps.image = this.selectComponent("#chat-suit-image");
		// comps.location = this.selectComponent("#chat-suit-location");
		// comps.video = this.selectComponent("chat-suit-video");
	},
	// 组件所在页面的生命周期函数
	show(){},
	hide(){},
});
