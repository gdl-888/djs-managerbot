const Discord = require('discord.js');
const client = new Discord.Client();

function print(x) {
	console.log(x);
}

var time = 0, botVer = "1.4.0", rev = "A";

client.on('ready', () => {
	print(`로그인 완료.`);
});


/* 여기부터 봇 코드 */

var warningList = {};

client.on('message', async function(msg) { /* 봇에 메시지가 올 때 */
	var imsg = msg.content.toUpperCase();
	var ismsg = imsg.replace(/\s/gi, '');
	var msgc = msg.content;
	
	var message = msg.content.toUpperCase().replace(/\s/gi, '');
	var sendMsg;
	
	/* 욕설 필터링 */
	if( 
		imsg.includes('FUCK') || imsg.includes('SHIT') || ismsg.includes('ASSHOLE') || ismsg.includes('PISSOFF') ||
		ismsg.includes('DICKHEAD') || imsg.includes('BITCH') || ismsg.includes('BASTARD') ||
		imsg.includes('씨발') || imsg.includes('병신') || imsg.includes('지랄') || imsg.includes('ㅅㅂ') || imsg.includes('ㅆㅂ') || 
		imsg.includes('ㅄ') || imsg.includes('ㅂㅅ') || imsg.includes('젠장') || imsg.includes('개새끼') || 
		imsg.includes('존나') || imsg.includes('좆나') || imsg.includes('뻑유') || imsg.includes('씨발') || ismsg.includes('왓더퍼킹')
		|| imsg.includes('坏蛋') || imsg.includes('笨蛋') || imsg.includes('王八蛋') || imsg.includes('滚蛋') || imsg.includes('糊涂蛋')
		|| imsg.includes('混蛋 ') || imsg.includes('我靠') || imsg.includes('我尻') || imsg.includes('牛屄') || imsg.includes('拍马屁')
		 || imsg.includes('滚开') || imsg.includes('滚开') || imsg.includes('靠北') || imsg.includes('混賬') || imsg.includes('你丫挺的')
		  || imsg.includes('妈的') || imsg.includes('양아치') || imsg.includes('쉽새끼')
	) {
		if(warningList[msg.member.toString()] == 1) {
			msg.member.addRole('<정보 삭제됨>');
			
			// 1.4 문장(다른 사람이 작성함) - 
			msg.channel.send('욕설을 사용했습니다. 15분 후에 자동적으로 차단해제 됩니다 한번 더 하실 경우엔 <정보 치환>관리자가 추방 처리하겠습니다 만약 테스트용으로 하셨을경우엔  <정보 치환>#차소게(<#<정보 삭제됨>>)에서 <정보 치환>관리자에게 요청하십시오.');
			
			warningList[msg.member.toString()] = 0;
		} else {
			msg.channel.send('욕설을 사용했습니다. 한 번 더 사용하면 차단됩니다.');
			warningList[msg.member.toString()] = 1;
		}
	}
});

client.on('guildMemberAdd', member => {
	member.addRole('<정보 삭제됨>');
	member.addRole('<정보 삭제됨>');
	member.addRole('<정보 삭제됨>');
});

client.login("<정보 삭제됨>");

/* 12시간마다 경고 초기화 */
var time = 0;
var warningReset = setInterval(function() { 
   if(time < 11) { 
      time++;
	  print("<<< " + String(time) + "시간 경과...");
   } else {
		warningList = {};
	    print("<<< 경고 초기화됨.");
		time = 0;
   }
}, 3600000);
