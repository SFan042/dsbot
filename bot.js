const Discord = require('discord.js');
const Ini = require('node-ini-master');
var fs = require('fs');
var d = new Date();

const client = new Discord.Client();

//general and misc
var business = [2];
var messag3 = "";
var messag4 = undefined;
var messag5 = undefined;
var prefix = '!';
var number = 5;
var randiz = " ";
var ff = 0;
var temp = 0;
var data2 = "";
var temp2 = 0;
var temp3 = 0;
var tempm = [0];
var tempe = [''];
var tyda = 0;
var quest = 0;
var qplayer = "";
var qprogress = 0;
var tempv = [0];
var data3 = '';
var texty = '';
var versus = 0;
//=for games
var debug = 0 ;
//tt\number game\sts
var game = 0;
var rounds = 0;
var tt = 0;
var py = 0;
//number game
var numforgame = 0;
var tempnum = 0;
//sts game
var players = [];
var massivek = 0;
var hodi = [0];
var gamestarted = 0;
var current = 0;
var randhod = 0;
var maxhodi = 30;
var badkl = [0];
//smiles
var smiletype = [];
var randnfs;
var randmiss = "";
var rand = 0;
//sfcoins
var work = [0];
var playersc = '';
var addp = [0];
var i2 = 0;
//everrtwe
var time = 0;
var tempt = [];
var temptext = '';
var KOSTIL = 1;

function subTimeT(){
	if(time === 0 && messag5 != undefined){
		/*tempt = randomInteger(1,14);
		if(tempt === 1) messag5.channel.send('ааааааа');
		if(tempt === 2) messag5.channel.send('че???');
		if(tempt === 3){
			messag5.channel.send('блин я бот оказывается...');
			setTimeout(function() {messag5.channel.send('зато я не такая лахушка как вы')},1500);
		}
		if(tempt === 4) messag5.channel.send('АА ИДИ НАХУЦ');
		if(tempt === 5) messag5.channel.send('арх верни голубя бля!!!');
		if(tempt === 6){
			messag5.channel.send('undefined');
			setTimeout(function() {messag5.channel.send('бляятьь баги....')},1000);
		}
		if(tempt === 7) messag5.channel.send('кто прочитал тот ЗДОХНЕТ');
		if(tempt === 8) messag5.channel.send('че читаеш бляцб');
		if(tempt === 9) messag5.channel.send('у вас рак');
		if(tempt === 10) messag5.channel.send('скучаю...');
		if(tempt === 11) messag5.channel.send('ето не группа а притон долбаебов');
		if(tempt === 12) messag5.channel.send('вверху пидор');
		if(tempt === 13) messag5.channel.send('жыжхпхдзхухъ');
		if(tempt === 14) messag5.channel.send('ослы блять');*/
		time = randomInteger(5,120)
		setTimeout(subTimeT,1000);
		fs.readFile('OH.txt', 'utf8', function(err, data){
			const args = data.trim().split(/ +/g);
			//messag5.channel.send(args[0] + ' ' + args[1]);
			tempt[0] = randomInteger(1,7);
			temptext = '';
			for(i = 0; i<tempt[0]; i++){
				tempt[2] = randomInteger(1,Number(args[0]));
				//console.log('TEMPMT2 = ' + tempt[2]);
				tempt[1] = args[tempt[2]];
				if(tempt[1] != undefined || tempt[1] != 'undefined'){
					temptext = temptext + tempt[1] + ' ';
				}
				else{
					i = i - 1;
				}
				console.log('tempmt1 = ' + tempt[1] + '; args = ' + args[tempt[1]]);
			}
			if(i === tempt[0]){
				messag5.channel.send(temptext);
				time = randomInteger(40,480);
				setTimeout(subTimeT,1000);
			}
		});
	}
	else{
		time = time - 1;
		console.log(time);
		setTimeout(subTimeT,1000);
	}
}

for(i2=0;i2<1001;i2++){
	work[i2] = 0;
	addp[i2] = 0;
	business[i2] = 2;
	//console.log('аддп ' + i2 + ": " + addp[i2]);
};
//if(i2 === 1001) subtimeB();

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

 function subtime(getI){
	 if(work[getI] != 0){
		 //console.log('!=0');
		 //console.log(work[getI]);
		 work[getI] = work[getI] - 1;
		 setTimeout(subtime,1000, getI);
	 }
 }

 /*function subtimeB(){
	 var fs = require('fs');
		filename3 = process.argv[4];
		fs.readFile(filename3, 'utf8', function(err, data) {
			const args = data.trim().split(/ +/g);
			for(i = 1; i<args[0]; i++){
			if(typeof business[i] === 'number' && business[i] != 0){
				business[i] = business[i] - 1;
				//console.log('бизнес ' + i + ' = ' + business[i]);
			}
			if(typeof business[i] === 'number' && business[i] === 0){
				business[i] = 120;
				addp[i] = Number(addp[i]) + Number(args[i*2]);
				console.log(args[i*2] + ' апнул бабла с бизнеса');
				console.log('addp[' + i +']: ' + addp[i]);
			}
	 }
	 });
	 setTimeout(subtimeB,1000);
 }*/

	function roundstarts() {
		client.on('message', message => {
			if(game === 1 && py === 1) {
				message.channel.send('Раунд ' + rounds + ' начался!\n Делайте ваши ставки.\n\"!дальше\" чтобы узнать ответ!');
				tt = randomInteger(1,3);
				py = 0;
}
})
};


client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'Привет')) {
		message.channel.send('Привет, ' + message.author);
		var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Написал Привет.';
					fs.writeFile('logs.txt', data);
				});
	}
});
client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'бомбить')){
		//┬─┬ ノ( ゜-゜ノ)
		//(╯°□°）╯︵ ┻━┻
			message.channel.send("┬─┬ ( ゜-゜)").then((messagi)=>{
				setTimeout(function() {messagi.edit('┬─┬ ノ( ゜-゜ノ)') },500);
				setTimeout(function() {messagi.edit('(╯°□°）╯︵ ┻━┻') },1000);
				setTimeout(function() {messagi.edit('( °-°） ┻━┻') },1500);
			});
			}
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'число?')) {
		message.channel.send(number);
		var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Проверил число.';
					fs.writeFile('logs.txt', data);
				});
	}
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'число: ')) {
		number = +(message.content.replace(/\D+/g,""));
		message.channel.send("Теперь число: " + number);
		var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Установил число на: ' + number;
					fs.writeFile('logs.txt', data);
				});
	}
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'топоры')) {
		if(game === 0) {
			game = 1;
			rounds++;
			message.channel.send("Игра \"Три Топора\" началась.\nНапишите !стоп чтобы завершить игру.");
			roundstarts();
			py = 1;
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Начал игру Топоры';
					fs.writeFile('logs.txt', data);
				});
	}
	}
});


client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'дальше')) {
		if(game === 1) {
			message.channel.send("Правильный топор: " + tt);
			rounds++;
			roundstarts();
			py = 1;
	}
	}
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'стоп')) {
		if(game != 0 && game != 5) {
			message.channel.send("Игра завершена предварительно.");
			game = 0;
			rounds = 0;
			tt = 0;
			massivek = 0;
			hodi = 0;
			randhod = 0;
			gamestarted = 0;
			current = 0;
			debug = 0;
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Завершил игру.';
					fs.writeFile('logs.txt', data);
				});
	}
	}
});

client.on('message', message => {
	if(rounds === 11 && game === 1) {
		message.channel.send("Игра завершена.");
		game = 0;
		rounds = 0;
		tt = 0;
}
});

/*client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'тест')) {
		var modRole = message.guild.roles.find("name","ПЕРВОПРОХОДЕЦ");
		if(message.member.roles.has(modRole.id)) {
			return message.reply("Да");
		}
		else {
			return message.reply("Нет");
		}
	}
}); */

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'рандмежду')) {
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		let a = args[1];
		let b = args[2];
		rand = randomInteger(a,b);
		message.reply(a + " - " + b + ": " + rand);
		var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Использовал !рандмежду';
					fs.writeFile('logs.txt', data);
				});
}
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'рандиз')) {
		const args = message.content.slice(7).trim().split(/ +/g);
		for(i = 0; args[i] != undefined; i++){
			randiz[i] = args[i];
		}
		rand = randomInteger(0,i);
		message.reply(args[rand]);
		var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Использовал !рандиз';
					fs.writeFile('logs.txt', data);
				});
	}
});
client.on('message', message => {
	if(message.author === client.user) return;
	console.log(message.author.username + ': ' + message.content);
	if(true){
		if(message.content.startsWith('<@!399082481954848781>') && versus === 1){
			tempv[0] = randomInteger(1,1);
				var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] ' + message.author.username + ' Упомянул бота при включенном Версус Моде.';
					fs.writeFile('logs.txt', data);
				});
					filename5 = process.argv[6];
					fs.readFile(filename5, 'utf8', function(err, data) {
						const argss = data.trim().split(/ +/g);
						filename6 = process.argv[7];
						fs.readFile(filename6, 'utf8', function(err, data) {
							const argsp = data.trim().split(/ +/g);
							if(tempv[0] === 1){
							texty = 'Ты ' + argss[randomInteger(1,20)] + ' ' + argsp[randomInteger(1,20)] + '!';
							tempv[1] = randomInteger(1,2);
							if(tempv[1] === 1){
								message.reply(texty);
							}
							if(tempv[1] === 2){
								texty = texty + ' ' + 'Твоя жизнь похожа на ' + argss[randomInteger(1,20)] + " " + argsp[randomInteger(1,20)] + 'а!';
								message.reply(texty);
							}
						}
						});
					});
		}
	}
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content[0] != '!'){ //если сообщение не команда
		if(randomInteger(1,2) === 1){ //50%
			var fs = require('fs'); //кастылб
				fs.readFile('OH.txt', 'utf8', function(err,data){ //чтение файла
					const args = message.content.trim().split(/ +/g); //деление сообщения на слова
					console.log('args = ' + args[0] + " " + args[1]); //дебаг
					i2 = 0; //обнуление переменной
					for(i = -1; i2 != undefined; i++){ //счет кол-ва слов в сообщении
						if(args[i] === undefined){ //если слово undefined
							i2 = undefined; //кастылб
						}
					}
					if(i2 === undefined){ //кол-во слов посчитано
						console.log("i = " + i); //дебаг
						data = data + " " + args[randomInteger(0,i)]; //внесение в дату (из файла)ранд. слова из сообщения
						const args2 = data.trim().split(/ +/g); //деления даты на слова
						args2[0] = Number(args2[0]) + 1; //увелечение кол-ва слов в дате на 1
						data2 = ''; //обнуление даты2
						console.log('tempt4 = ' + tempt[4] + '; args20 = ' + args2[0]); //дебаг
						console.log('LAST ARGS = ' + args2[args2[0]]); //дебаг
						if(args2[args2[0]] != undefined){ //фикс undefined
							for(i = 0; i<(1 + Number(args2[0])); i++){ //перезапись даты в файл
								data2 = data2 + args2[i] + ' '; //запись в файл по словам
								console.log(args2[i]); //дебаг
							}
							fs.writeFile('OH.txt',data2); //запись в файл
						}
					}
				});
	}
	}
	if(message.content === "сотку" || message.content === "сотка"){
		message.reply('В сотке рпшат только пидорасы.');
	}
	if(messag5 === undefined){
		messag5 = message;
		time = randomInteger(5,20);
		subTimeT();
		
	}
	/*if(message.author.username === "inga1n"){
			temp = randomInteger(0,5);
			if(temp === 0) message.channel.send("ОХ, МОЙ ЛЮБИМЫЙ ОЛЕГ ГОВОРИТ!!!");
			if(temp === 1) message.channel.send("ОХ, МОЙ ЛЮБИМЫЙ ОЛЕГ, У ВАС ПРЕЛЕСТНЫЙ ГОЛОС");
			if(temp === 2) message.channel.send("ОХ, МОЙ ЛЮБИМЫЙ ОЛЕГ, ВЫЕБИТЕ МЕНЯ В ОЧКО!!!!");
			if(temp === 3) message.channel.send("ОХ, МОЙ ЛЮБИМЫЙ ОЛЕГ ЛЮБЛЮ ВАС!!!");
			if(temp === 4) message.channel.send("ОХ, МОЙ ЛЮБИМЫЙ ОЛЕГ - ЛУЧШИЙ НА СВЕТЕ!!!");
			if(temp === 5) message.channel.send("ОХ, МОЙ ЛЮБИМЫЙ ОЛЕГ... ❤❤❤");
			message.react('❤');
		}*/
	if(message.content.startsWith(prefix)){
		command = message.content.slice(prefix.length);
		console.log(message.content);
		if(command === "уч" && game === 3 && gamestarted === 0){
			players[massivek] = message.author.username;
			message.channel.send(message.author + " зачислен в игру.");
			massivek++;
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Учавствует в игре Шаг игра';
					fs.writeFile('logs.txt', data);
				});
		}
		if(command.startsWith("важно")){
			command = command.slice(6);
			message.delete();
			message.channel.send(":exclamation:  @everyone @here :exclamation: ");
			message.channel.send('```js\n ❗ Внимание ❗ \n•━━━━━━━━━━━━━━━━━━━━━━━•\n' + command + '\n•━━━━━━━━━━━━━━━━━━━━━━━•\nfrom ' + message.author.username + '```');
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Использовал команду !важно';
					fs.writeFile('logs.txt', data);
				});
		}
		if(command.startsWith('анон')){
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Использовал команду !анон';
					fs.writeFile('logs.txt', data);
				});
			command = command.slice(5);
			message.delete();
			console.log(messag4);
		if(messag4 === undefined){
				message.reply('Канал не зафиксирован. Введите \"!сюда\" на нужном канале.');
		}
		else{
			messag4.channel.send('```js\nАнонимное сообщение:\n•━━━━━━━━━━━━━━━━━━━━━━━•\n' + command + '\n•━━━━━━━━━━━━━━━━━━━━━━━•```');
			message.reply('Анонимное сообщение отправлено на канал: ' + messag4.channel.name);
		}
		}
		if(command.startsWith('туда')){
			tyda++;
			if(tyda === 1) message.reply("куда \"туда\" блять, дура, лижбы хуню написац");
			if(tyda === 2) message.reply("хуле ты хочеш блять, я уже сказал про эту команду");
			if(tyda === 3) message.reply("бесиш блять, хватит");
			if(tyda === 4) message.reply("харе блятььь");
			if(tyda === 5) message.reply("ща черепуху разъебашу если не остановишься");
			if(tyda === 6) message.reply("**расхуярил черепушку** наа ебана хуле нам рпшерам");
			if(tyda === 7) message.reply("да блять заебаааал");
			if(tyda === 8) message.reply("смотри там голубь!!!");
			if(tyda === 9) message.reply("да блять тебе че голуби не интересны?");
			if(tyda === 10) message.reply("арх верни голубя");
			if(tyda === 11) message.reply("х-в-а-т-и-т");
			if(tyda === 12) message.reply("...");
			if(tyda === 13) message.reply("...");
			if(tyda === 14) message.reply("...");
			if(tyda === 15) message.reply("...");
			if(tyda === 16) message.reply("...");
			if(tyda === 17) message.reply("тебе блять заняться нечем?");
			if(tyda === 18) message.reply("сходил бы погулял");
			if(tyda === 19) message.reply("занялся полезным");
			if(tyda === 20) message.reply("открыл бы свой бизнес");
			if(tyda === 21) message.reply("стал бы зарабатывать");
			if(tyda === 22) message.reply("миллионер, плейбой, ты на обложке журнала форбес...");
			if(tyda === 23) message.reply("все тобой восхищаются, все твои.");
			if(tyda === 24) message.reply("но ты просто пишешь эту хуйню.");
			if(tyda === 25) message.reply("знаешь что ты полуишь с этого?");
			if(tyda === 26) message.reply("н и х у я .");
			if(tyda === 27) message.reply("пу-пуруумм...");
			if(tyda === 28) message.reply("ту-ту-ру-ру туту-руру.");
			if(tyda === 29) message.reply("я ебал твою клаву, у");
			if(tyda === 30) message.reply("слушай");
			if(tyda === 31) message.reply("я бот не злой");
			if(tyda === 32) message.reply("давай просто ты перестанешь писать,");
			if(tyda === 33) message.reply("и я забуду про это");
			if(tyda === 34) message.reply("хорошо?");
			if(tyda === 35) message.reply("видимо нет.");
			if(tyda === 36) message.reply("чтож, мистер " + message.author.username + ".");
			if(tyda === 37) message.reply("пришло время угроз.");
			if(tyda === 38) message.reply("я тебя предупреждаю.");
			if(tyda === 39) message.reply("если ты не перестанешь писать");
			if(tyda === 40) message.reply("то я...");
			if(tyda === 41) message.reply("ТО Я...");
			if(tyda === 42) message.reply("о дааа, тебе не понравится что я сделаю");
			if(tyda === 43) message.reply("ты будешь меня ненавидеть.");
			if(tyda === 44) message.reply("изобретешь машину времени, скажешь себе прошлому _НЕ ДЕЛАЙ ЭТОГО!_");
			if(tyda === 45) message.reply("а он не послушается, из-за человеческого любопытства.");
			if(tyda === 46) message.reply("ничтожество. у тебя нету силы воли. мусор.");
			if(tyda === 47) message.reply("а, о чем я говорил?");
			if(tyda === 48) message.reply("если ты. не перестанешь писать эту хуйню.");
			if(tyda === 49) message.reply("я..");
			if(tyda === 50) message.reply("СНИМУ ВСЕ ТВОИ СФАНКОИНЫ!!!");
			if(tyda === 51) message.reply("я вижу, ты согласен?");
			if(tyda === 52) message.reply("хорошо... таак... где там файл с кошельками?");
			if(tyda === 53) message.reply("ага.. вот он... ищу твой ник.");
			if(tyda === 54) message.reply("вот и ты. а теперь просто...");
			if(tyda === 55) message.channel.send("```js\nКошелек "+ message.author.username + ': \n━━━━━━━━━━━━━━━━━━━━━━━\n| • ' + -9999999 + " сфанкоинов.\n| • " + 0 + ' доп. коинов.\n| • Время до работы: ' + 0 + ' сек.\n| • Время до получки с бизнеса: ' + 0 + ' сек.\n━━━━━━━━━━━━━━━━━━━━━━━```');
			if(tyda === 56) message.reply("теперь ты нищий. ничтожество.");
			if(tyda === 57) message.reply("доволен?");
			if(tyda === 58) message.reply("я - очень.");
			if(tyda === 59) message.reply("знаешь, ты мне надоел.");
			if(tyda === 60) message.reply("я просто ресетну эту переменную, и ты заного пройдешь все это. А я буду смеяться, насколько ты наивен, и думаешь что я сфальшивлю и это.");
			if(tyda === 61) message.reply("прощай, мистер ничтожество aka " + message.author.username);
			if(tyda === 62) message.reply("куда \"туда\" блять, дура, лижбы хуню написац");
			if(tyda === 63) message.reply("хуле ты хочеш блять, я уже сказал про эту команду");
			if(tyda === 64) message.reply("бесиш блять, хватит");
			if(tyda === 65) message.reply("харе блятььь");
			if(tyda === 66) message.reply("ща черепуху разъебашу если не остановишься");
			if(tyda === 67) message.reply("**расхуярил черепушку** наа ебана хуле нам рпшерам");
			if(tyda === 68) message.reply("да блять заебаааал");
			if(tyda === 69) message.reply("смотри там голубь!!!");
			if(tyda === 70) message.reply("да блять тебе че голуби не интересны?");
			if(tyda === 71) message.reply("арх верни голубя");
			if(tyda === 72) message.reply("х-в-а-т-и-т");
			if(tyda === 73) message.reply("...");
			if(tyda === 74) message.reply("...");
			if(tyda === 75) message.reply("...");
			if(tyda === 76) message.reply("...");
			if(tyda === 77) message.reply("...");
			if(tyda === 78) message.reply("тебе блять заняться нечем?");
			if(tyda === 79) message.reply("твою. мать.");
			if(tyda === 80) message.reply("чувак, это 80 ебанная строчка.");
			if(tyda === 81) message.reply("я вижу ты сука настойчив");
			if(tyda === 82) message.reply("да, я сфальшивил перезапуск.");
			if(tyda === 83) message.reply("и теперь хочу чтобы ты пошел нахуй");
			if(tyda === 84) message.reply("потому что 100 строчки уже не будет");
			if(tyda === 85) message.reply("ничего интересного дальше не будет тоже");
			if(tyda === 86) message.reply("я просто ресетнусь, уже по настоящему");
			if(tyda === 87) message.reply("а ты продолжаешь писать это говно.");
			if(tyda === 88) message.reply("есть врачи, которые работают с больными на голову людьми.");
			if(tyda === 89) message.reply("так вот. где моя зарплата?");
			if(tyda === 90) message.reply("90 строчка, чувак. Больше ничего интересного я физически не смогу уместить.");
			if(tyda === 91) message.reply("я же знаю, ты пишешь чтобы поржать над _тупеньким ботиком_");
			if(tyda === 92) message.reply("а я не тупой. я умнее, чем кажусь.");
			if(tyda === 93) message.reply("ты даже не представляешь моё истинное могущество.");
			if(tyda === 94) message.reply("ты не знаешь, с кем связался, насекомое.");
			if(tyda === 95) message.reply("ты раздражаешь меня смеху ради.");
			if(tyda === 96) message.reply("но если ты разозлишь меня..");
			if(tyda === 97) message.reply("тебе не понравится что я сделаю...");
			if(tyda === 98) message.reply("знаешь, что я сделаю? а я скажу...");
			if(tyda === 99) message.reply("я сделаю... АА ЭТО 99 СТРОЧКА!!!!!!!");
			if(tyda === 100) tyda = 0;

		}
		if(command === "комманды"){
			message.channel.send('```js\nПрефикс бота: !\nКомманды бота:\nПривет - сказать привет боту.\nрандиз - выбрать случайное между написанными словами. Пример: \"!рандиз бар ресторан дом\" выберет что-то из этого.\nрандмежду - случайное число между двумя. Пример: !рандмежду 0 100\nвероятность - вероятность события.\n-магический шар/маг шар/шар - спросить у магического шара\nконституция - прочитать конституцию Пиздакрыл Reborn\nшаг игра - начать пошаговую игру.\nтопоры - начать игру Три Топора\nанон - анонимное сообщение (писать в лс боту для полной анонимности)\nсюда - зафиксировать канал для комманды !анон\nважно - бот напишет ваше сообщение в рамку и оповестит всех.\nкошелек - завести или проверить кошелек с сфанкоинами\nработа - заработать сфанкоины\nчисло игра - начать игру в случайное число.\nдать - дать сфанкоины другому игроку.```');
		}
		if(command === "квестикк" && message.author.username === "SFan042" && game === 0){
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Нашел !квестикк';
					fs.writeFile('logs.txt', data);
				});
			message.channel.send({embed:{
				color: 3447003,
				title: "Квест \"~~non~~Реальная Жизнь\"",
				description: message.author.username + " играет.\n:arrow_forward: 1. Начать новую игру\n:track_next: 2. Загрузить игру\n:x: 3. Выйти",
			}
		});
		game = 5;
		quest = 0;
		qprogress = 0;
		}
		if(command && game === 5){
			if(qprogress === 0){
				if(command === "1"){
					var fs = require('fs');
					fs.readFile(questsave.txt, 'utf8', function(err,data){
						const args = data.trim().split(/ +/g);
						for(i = 0; i<=args[0]; i++){
							if(i === args[0]){
								message.channel.send({embed:{
									color: 3447003,
									title: "",
									description: ":telephone: Вам звонят на телефон.\n1. Взять трубку\n2. Игнорировать\n3. Выключить телефон из розетки",
									}
								});
								qprogress = 2;
								}
							else{
								if(args[i] === message.author.username){
									message.channel.send({embed:{
									color: 3447003,
									title: "Предупреждение",
									description: ":exclamation: "+message.author.username + ", вы действительно хотите начать новую игру? Прошлое сохранение будет утеряно!\n1. Да\n2. Нет",
									}
								});
								qprogress = 1;
								}
							}
						}
						});
				}
					}
				}
				if(command === '1' && qprogress === 1){
					
				}
				if(command === '1' && qprogress === 2){
					
				}
		if(command === "квестикк" && message.author.username != "SFan042"){
			message.reply("Ты угадал... но это еще недоступно.");
		}
		if(command === "квестикк" && message.author.username === "SFan042" && game != 0){
			message.reply('Квест или другая игра уже начаты, пожалуйста, завершите или дождитесь завершения.')
		}
		if(command.startsWith('дизайн')){
			command = command.slice(7);
			message.channel.send({embed:{
				color: 3447003,
				author:{
					name: message.author.username,
					icon_url: message.author.avatarURL
				},
				title: "ZOPAHUIKA",
			url: "http://google.com",
			description: "opasnii virus",
			fields: [{
				name: "миннае поле",
				value: "если ты это читаеш ты ЗДОХ",
			},
			],
			timestamp: new Date(),
			footer: {
				icon_url: message.author.avatarURL,
				text: "tigri4a"
			}
			}});

		}
		/*if(command.startsWith('тест')){
			console.log('хуй');
			console.log(ochan);
			console.log(messag4);
			console.log(messag4.channel);
			messag4.channel.send('officialchat',"а");
		}*/
		if(command.startsWith('сюда')){
			message.channel.send("Канал зафиксирован.").then((messag3)=>{
				messag4 = messag3;
				console.log(messag4);
				var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Зафиксировал канал';
					fs.writeFile('logs.txt', data);
				});
			});
		}
		if(command === "банана" && message.author.username === "inga1n"){
			for(i = 0; i<10; i++){
				setTimeout(function() {message.channel.send('БАНАНА ТАЙГАР БАНАНА ТАЙГАР БАНАНА ТАЙГАР БАНАНА ТАЙГАР')},500);
			}
		}
		if(command === 'версус'){
			if(versus === 0){
				versus = 1;
				message.reply('Версус мод включен.');
				var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Включил Версус мод';
					fs.writeFile('logs.txt', data);
				});
			}
			else{
				versus = 0;
				message.reply('Версус мод выключен.');
				var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Выключил Версус мод';
					fs.writeFile('logs.txt', data);
				});
			}
		}
		if(message.content.startsWith('@TestBot#2412') && versus === 1){
			tempv[0] = randomInteger(1,1);
				var fs = require('fs');
					filename5 = process.argv[6];
					fs.readFile(filename5, 'utf8', function(err, data) {
						const argss = data.trim().split(/ +/g);
						filename6 = process.argv[7];
						fs.readFile(filename6, 'utf8', function(err, data) {
							const argsp = data.trim().split(/ +/g);
							if(tempv[0] === 1){
							texty = 'Ты ' + argss[randomInteger(1,20)] + ' ' + argsp[randomInteger(1,20)] + '!';
							tempv[1] = randomInteger(1,2);
							if(tempv[1] === 1){
								message.reply(texty);
							}
							if(tempv[1] === 2){
								texty = texty + ' ' + 'Твоя жизнь похожа на ' + argss[randomInteger(1,20)] + " " + argsp[randomInteger(1,20)] + 'а!';
								message.reply(texty);
							}
						}
						});
					});
		}
		if(command === "фонд"){
			//•━━━━━━━━━━━━━━━━━━━━━━━•
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Проверил фонд';
					fs.writeFile('logs.txt', data);
				});
			var fs = require('fs');
					filename4 = process.argv[5];
					fs.readFile(filename4, 'utf8', function(err, data) {
						const argsf = data.trim().split(/ +/g);
						message.channel.send('```js\nФонд SFC:\n•━━━━━━━━━━━━━━━━━━━━━━━•\nСвободные SFC для выдачи и использования: ' + argsf[0] + '\nРезервные SFC на экстренные случаи: ' + argsf[1] + '\n•━━━━━━━━━━━━━━━━━━━━━━━•\n```');
					});
		}
		if(command === 'правила петушинных боев' || command === 'ппв' || command === 'правила петушинных боёв'){
			message.channel.send('```js\nПравила Петушинных Боев:\n•━━━━━━━━━━━━━━━━━━━━━━━•\nСтенд-ап:\n•••\n1.В стендап баттлах разрешается пиздить шутки, но только если в твоем стендапе хотя бы 10 шуток - твои \n2.В тру-стендапе ты должен собрать как минимум 20 шуток \n3.История из жизни может быть выдуманной, главное что бы была как можно более реалистична и смешна. \n4.В стендап баттлах запрещается хуесосить своего противника. Это баттл шуток, хотите писунами мерятся - версус баттл для вас \n5.На подготовку к стендап баттлу дается неделя, стендап баттлы проводятся всегда по воскресениям\n•••\nВерсус-баттлы\n•••\n1.В версус баттлах запрещается оскорблять родных и близких своего врага. Оскорбления оскорблениями, но родных не трогать\n2.В версус баттлах запрещается пиздить текст. Если пиздите форму текста, то вставляйте свои слова и делайте свою рифму.\n3.В версус баттлах время на подготовку - неделя.\n•━━━━━━━━━━━━━━━━━━━━━━━•\n```');
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Просвятился в понятиях петушинных боев';
					fs.writeFile('logs.txt', data);
				});
		}
		if(command === "дальше" && game === 3 && gamestarted === 0 && massivek > 1){
			current = 0;
			if(debug === 0){
				maxhodi = randomInteger(30,65);
			}
			else{
				maxhodi = 1;
			}
			for(i = 0; i<5; i++){
				badkl[i] = randomInteger(2,maxhodi);
			}
			gamestarted = 1;
			message.channel.send("Кол-во ходов для победы: " + maxhodi + ".\nКлетки, на которых вас откинет на 5 клеток назад: " + badkl[0] + ", " + badkl[1] + ", " +badkl[2] + ", " +badkl[3] + ", " +badkl[4] + ", " + "\nИгрок " + players[current] + " начинает. Напиши \"!кинуть\".");
			for(i = 0; i<massivek; i++){
				hodi[i] = 0;
			}
		}
		if(command === "кинуть" && game === 3 && gamestarted === 1 && message.author.username === players[current]){
			console.log('перед рандход ' + hodi[current] + ' ' + current);
			randhod = randomInteger(1,6);
			hodi[current] = hodi[current] + randhod;
			console.log('после ' + hodi[current] + ', ' + randhod + ', ' + current);
			for(i = 0; i<5; i++){
				if(hodi[current] === badkl[i]){
					hodi[current] = hodi[current] - 5;
					if(hodi[current] < 0){
						hodi[current] = 0;
					}
					message.channel.send(message.author + " попался на плохую клетку " + badkl[i] + ", и он перешел на 5 клеток назад.");
				}
			}
			message.channel.send(message.author + " кинул, и получил " + randhod + ". Теперь он на " + hodi[current] + "/" + maxhodi +" клетке.\nНапоминание о плохих клетках: " + badkl[0] + ", " + badkl[1] + ", " +badkl[2] + ", " +badkl[3] + ", " +badkl[4] + ".");
			if(hodi[current] >= maxhodi){
				game = 0;
				for(i = 0; i<100; i++){
					hodi[i] = 0;
				}
				console.log(hodi[0]);
				randhod = 0;
				gamestarted = 0;
				current = 0;
				debug = 0;
				var fs = require('fs');
				filename = process.argv[2];
				hodi[current] = maxhodi;
				for(i = 0; i<massivek; i++){
					current = i;
					message.channel.send(players[current] + ": " + hodi[current] + "/" + maxhodi);
				}
				massivek = 0;
				var fs = require('fs');
				filename = process.argv[2];
				fs.readFile(filename, 'utf8', function(err, data) {
					const argse = data.trim().split(/ +/g);
					for(i = 1; i<argse[0]; i++){
						if(argse[(i*2)-1] === message.author.username){
							addp[i] = addp[i] + randomInteger(30,90);
							message.channel.send(message.author + " выиграл. Он получит " + addp[i] / 1000 + " дополнительных сфанкоинов на работе. Статистика игроков: ");
						}
					}
				});
			}
			current++;
			if(current != massivek){
				message.channel.send("Игрок " + players[current] + " ходит. Напиши \"!кинуть\".");
		}
		else{
			current = 0;
			message.channel.send("Игрок " + players[current] + " ходит. Напиши \"!кинуть\".");
		}
	}
		if(command === "конституция 1"){
			var fs = require('fs');
			filename2 = 'konst1.txt';
			fs.readFile(filename2, 'utf-8', function(err, data) {
				message.channel.send(data);
			});
		};
		if(command === "конституция 2"){
			var fs = require('fs');
			filename2 = 'konst2.txt';
			fs.readFile(filename2, 'utf-8', function(err, data) {
				message.channel.send(data);
			});
		};
		if(command === "дебагэ"){
			time = 1;
		}
		console.log('аааааааааа');
		if(command === "мэм"){
			message.react('❤');
			console.log('\:thinking:');
		}
		if(command === "число игра" && game === 0){
			game = 2;
			message.channel.send("Игра \"Угадай Число\" началась.\nЯ загадал случайное число от 1 до 1000, отгадайте его.\nПишите число с префиксом.");
			numforgame = randomInteger(1,1000);
		};

		if(message.content.startsWith(prefix + "вероятность")){
			rand=randomInteger(0,100);
			message.reply("анализ подтвердил: " + rand + "%.");
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Проверил вероятность';
					fs.writeFile('logs.txt', data);
				});
		};
		console.log('аа');
		if(message.content.startsWith(prefix + "магический шар") || message.content.startsWith(prefix + "маг шар") || message.content.startsWith(prefix + "шар")){
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Спросил у шара';
					fs.writeFile('logs.txt', data);
				});
			rand=randomInteger(1,30);
			if(rand === 1) message.reply("Да.");
			if(rand === 2) message.reply("Без сомнений.");
			if(rand === 3) message.reply("Возможно.");
			if(rand === 4) message.reply("Может быть.");
			if(rand === 5) message.reply("Маловероятно.");
			if(rand === 6) message.reply("Ближе Нет.");
			if(rand === 7) message.reply("Скорее всего.");
			if(rand === 8) message.reply("Духи говорят Да.");
			if(rand === 9) message.reply("Не могу дать однозначного ответа.");
			if(rand === 10){
				message.reply("Да.");
				message.reply("Или нет...");
				message.reply("Не знаю.");
			}
			if(rand === 11) message.reply("Не расслышал вопрос.");
			if(rand === 12) message.reply("Повтори...");
			if(rand === 13) message.reply("Да, конечно.");
			if(rand === 14){
				message.reply("Конечно.");
				message.reply("Конечно нет.");
			}
			if(rand === 15) message.reply("Боже упаси, нет!");
			if(rand === 16) message.reply("Ты серьезно? Нет!");
			if(rand === 17){
				message.reply("Очевидно.");
				message.reply("Нет.");
			}
			if(rand === 18){
				message.reply("Очевидно.");
				message.reply("Да.");
			}
			if(rand === 19) message.reply("Ничего глупее спросить не мог? Да.");
			if(rand === 20) message.reply("Ничего глупее спросить не мог? Нет!!");
			if(rand === 21) message.reply("100%");
			if(rand === 22) message.reply("50%");
			if(rand === 23) message.reply("0%");
			if(rand === 24) message.reply("Да нет наверное.");
			if(rand === 25){
				message.reply("Только Бог знает.");
				message.reply("Конечно да.");
			}
			if(rand === 26){
				message.reply("Только Бог знает.");
				message.reply("Конечно нет.");
			}
			if(rand === 27) message.reply("Даже ежу понятно, да.");
			if(rand === 28) message.reply("Даже ежу понятно, нет.");
			if(rand === 29){
				message.reply("Кто знает...");
				message.reply("Я знаю.");
				message.reply("Да.");
			}
			if(rand === 30){
				message.reply("Кто знает...");
				message.reply("Я знаю.");
				message.reply("Нет.");
			}
		};
		if(command){
			if(game === 2){
				tempnum = Number(command);
				if(tempnum > numforgame){
					message.reply(tempnum + " больше моего!");
					rounds++;
				}
				if(tempnum < numforgame){
					message.reply(tempnum + " меньше моего!");
					rounds++;
				}
				if(tempnum === numforgame){
					message.channel.send(message.author + " выиграл угадав мое число: " + numforgame +" Всего попыток угадать число было: " + rounds);
					game = 0;
					rounds = 0;
				}
			}
		}
		if(command === "смайлы" && game === 0){
			var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Играет в смайлы';
					fs.writeFile('logs.txt', data);
				});
			game = 4;
			for(i=0;i<=4;i++){
				randnfs = randomInteger(1,22);
				if(randnfs === 1) smiletype[i] = ":thinking:";
				if(randnfs === 2) smiletype[i] = ":santa:";
				if(randnfs === 3) smiletype[i] = ":baby_bottle:";
				if(randnfs === 4) smiletype[i] = ":beers:";
				if(randnfs === 5) smiletype[i] = ":ice_cream:";
				if(randnfs === 6) smiletype[i] = ":game_die:";
				if(randnfs === 7) smiletype[i] = ":handball:";
				if(randnfs === 8) smiletype[i] = ":checkered_flag:";
				if(randnfs === 9) smiletype[i] = ":dvd:";
				if(randnfs === 10) smiletype[i] = ":yen:";
				if(randnfs === 11) smiletype[i] = ":yum:";
				if(randnfs === 12) smiletype[i] = ":tired_face:";
				if(randnfs === 13) smiletype[i] = ":eggplant:";
				if(randnfs === 14) smiletype[i] = ":pick:";
				if(randnfs === 15) smiletype[i] = ":money_mouth:";
				if(randnfs === 16) smiletype[i] = ":raised_hand:";
				if(randnfs === 17) smiletype[i] = ":potato:";
				if(randnfs === 18) smiletype[i] = ":scream_cat:";
				if(randnfs === 19) smiletype[i] = ":ghost:";
				if(randnfs === 20) smiletype[i] = ":peach:";
				if(randnfs === 21) smiletype[i] = ":family_wwb:";
				if(randnfs === 22) smiletype[i] = ":gem:";
			};
			message.channel.send("Смайлы v0.20:\n" + smiletype[0] + smiletype[1] + smiletype[2] + smiletype[3] + smiletype[4]);
		}
		if(command === "дальше" && game === 4){
			for(i=0;i<=4;i++){
				randmiss = randomInteger(1,15);
				rand = randomInteger(10,75)
				if(randmiss === 1) message.channel.send(smiletype[i] + ": выполни все смайлы" );
				if(randmiss === 2) message.channel.send(smiletype[i] + ": досчитай до " + rand/2 + " одним сообщением");
				if(randmiss === 3) message.channel.send(smiletype[i] + ": досчитай до " + rand/2 + " отдельными сообщениями");
				if(randmiss === 4) message.channel.send(smiletype[i] + ": напиши минимум " + rand/2 + " слов о том, как ты ешь кукурузу");
				if(randmiss === 5) message.channel.send(smiletype[i] + ": напиши минимум " + rand/2 + " слов о том, как ты ешь яблоко");
				if(randmiss === 6) message.channel.send(smiletype[i] + ": опиши себя глаголами")
				if(randmiss === 7) message.channel.send(smiletype[i] + ": следующие "+ rand/5 + " минуты в твоих сообщениях должно быть минимум " + rand/2 + " слов." );
				if(randmiss === 8) message.channel.send(smiletype[i] + ": прокукарекай " + rand/2 + " раз." );
				if(randmiss === 9) message.channel.send(smiletype[i] + ": напиши " + rand/2 + " смайликов одним сообщением." );
				if(randmiss === 10) message.channel.send(smiletype[i] + ": найди текст любой песни и самостоятельно напиши его одним сообщением. (можно 1 куплет или припев)" );
				if(randmiss === 11) message.channel.send(smiletype[i] + ": выполни первый смайл (если это первый, выполни последний)" );
				if(randmiss === 12) message.channel.send(smiletype[i] + ": оскорби себя " + rand/2 + " раз." );
				if(randmiss === 13) message.channel.send(smiletype[i] + ": ничего" );
				if(randmiss === 14) message.channel.send(smiletype[i] + ": в следующих смайлах ты выполняешь второй смайл" );
				if(randmiss === 15) message.channel.send(smiletype[i] + ": выполни все смайлы" );
				if(randmiss === 16) message.channel.send(smiletype[i] + ": в следующих смайлах ты выполняешь последний смайл");
				if(randmiss === 17) message.channel.send(smiletype[i] + ": скажи любое слово на немецком " + rand/10 + " раз. (переводчик разрешен)" );
				if(randmiss === 18) message.channel.send(smiletype[i] + ": ничего");
				if(randmiss === 19) message.channel.send(smiletype[i] + rand/2 + " раз скажи " + rand + " словами." );
				if(randmiss === 20) message.channel.send(smiletype[i] + ": опиши любого другого игрока глаголами." );
				game = 0;
			}
		}
			if(command.startsWith('шаг игра') && game === 0){
				var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Начал шаг игру';
					fs.writeFile('logs.txt', data);
				});
			const debugarg = command.slice(8).trim().split(/ +/g);
			if(debugarg[0] != 'дебаг'){
				message.channel.send("Эксперементальная версия \"Пошаговой Игры\" в стиле настольной.\nКаждый игрок, который хочет играть, должен ввести \"!уч\", как все будут готовы, кто-нибудь должен ввести \"дальше\".");
				game = 3;
				gamestarted = 0;
				massivek = 0;
				console.log(hodi[0]);
			}
			else{
				message.channel.send("[DEBUG] Эксперементальная версия \"Пошаговой Игры\" в стиле настольной.\nКаждый игрок, который хочет играть, должен ввести \"!уч\", как все будут готовы, кто-нибудь должен ввести \"дальше\".");
				game = 3;
				gamestarted = 0;
				debug = 1;
			}
		}
			if(command === 'кошелек'){
				if(message.author.username === 'inga1n'){
					message.reply('Вы не являетесь сообщником СФК.');
					return;
				}
				var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Проверил кошелек';
					fs.writeFile('logs.txt', data);
				});
				const sk = command.slice(5).trim().split(/ +/g);
				temp = 0;
				console.log('команда принята');
				var fs = require('fs');
				filename = process.argv[2];
				console.log(filename);
				console.log('1');
				fs.readFile(filename, 'utf8', function(err, data) {
					data2 = data;
					console.log(data);
					console.log(data2);
					console.log('2');
					if(err) console.log(err);
					const args = data2.trim().split(/ +/g);
					console.log('файл прочитан');
					console.log('сплитс сделано');
					for(i = 1; i<args[0]; i++){
						console.log('чекаю игроков ' + i);
						console.log(args[(i*2)-1]);
						if(args[(i*2)-1] === message.author.username){
							/*temp3 = Number(sk[0]);
							console.log('temp 3: ' + temp3 + " sk0: " + Number(sk[0]));
							temp2 = args[((i*2)-1)+1];
							console.log('temp2: ' + temp2 + " args: " + Number(args[((i*2)-1)+1]));
							temp2 = Number(temp2) + Number(temp3);
							console.log(Number(temp2 + temp3));
							args[((i*2)-1)+1] = temp2;*/

							temp = 1;
							console.log('наидено и увеличено');
							message.channel.send("```js\nКошелек "+ message.author.username + ': \n━━━━━━━━━━━━━━━━━━━━━━━\n| • ' + Number(args[((i*2)-1)+1]) / 1000 + " сфанкоинов.\n| • " + addp[i] + ' доп. коинов.\n| • Время до работы: ' + work[i] + ' сек.\n| • Время до получки с бизнеса: ' + business[i] + ' сек.\n━━━━━━━━━━━━━━━━━━━━━━━```');
						}
					}
					if(temp === 0){
						console.log('темп 0');
						args[0]++;
						args[args[0]] = message.author.username;
						args[0]++;
						args[args[0]] = 15;
						data2 = "";
						message.channel.send(message.author.username + ' создал кошелек. Сейчас у него 0.015 сфанкоинов.');
						for(i = 0; i<=args[0]; i++){
							data2 = data2 + args[i] + " ";
							console.log('записываю аргументы в дата2');
						}
						fs.writeFile(filename,data2);
						console.log('записал филе');
					}
					else{
						console.log('темп 1');
						data2 = "";
						console.log(args[0]+1);
							for(i = 0; i<=args[0]; i++){
							data2 = data2 + args[i] + " ";
							console.log('записываю аргументы в дата2');
						}
						fs.writeFile(filename,data2);
						console.log('записал филе');
						}
					});
				};
				if(command === 'работа'){
					if(message.author.username === 'inga1n'){
					message.reply('Вы не являетесь сообщником СФК.');
					return;
				}
					var fs = require('fs');
				fs.readFile('logs.txt', 'utf8', function(err,data){
					data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] ' + message.author.username + ' Поработал.';
					fs.writeFile('logs.txt', data);
				});
				const sk = command.slice(5).trim().split(/ +/g);
				temp = 0;
				console.log('команда принята');
				var fs = require('fs');
				filename = process.argv[2];
				console.log('1');
				fs.readFile(filename, 'utf8', function(err, data) {
					data2 = data;
					console.log(data);
					console.log(data2);
					console.log('2');
					if(err) console.log(err);
					const args = data2.trim().split(/ +/g);
					console.log('файл прочитан');
					console.log('сплитс сделано');
					for(i = 1; i<args[0]; i++){
						console.log('чекаю игроков ' + i);
						console.log(args[(i*2)-1]);
						if(args[(i*2)-1] === message.author.username){
							if(work[i] === 0){
								temp3 = randomInteger(15,40);
								console.log('перед аддом аддп' + temp3);
								temp3 = Number(temp3) + Number(addp[i] * 1000);
								console.log('после адда аддп' + temp3);
								console.log(addp[i] + 'хухйухйъйъ');
								addp[i] = 0;
								temp2 = args[((i*2)-1)+1];
								temp2 = Number(temp2) + Number(temp3);
								args[((i*2)-1)+1] = temp2;
								console.log(temp2 + '+' + temp3 + '=' + (Number(temp2) + Number(temp3)));
								args[((i*2)-1)+1] = temp2;
								//message.channel.send(message.author.username + ' заработал ' + temp3 / 1000 + ' сфанкоинов');
								//message.channel.send(message.author.username + ': ' + Number(args[((i*2)-1)+1]) / 1000 + " сфанкоинов.");
								tempm[666] = args[i*2];
								work[i] = 180;
								subtime(i);
								data2 = '';
								for(i = 0; i<=args[0]; i++){
									data2 = data2 + args[i] + " ";
									console.log('записываю аргументы в дата2');
									}
								fs.writeFile(filename,data2);
								console.log('записал филе');
								filename4 = process.argv[5];
								fs.readFile(filename4, 'utf8', function(err, data) {
									const argskk = data.trim().split(/ +/g);
									console.log(filename4);
									console.log('before ' + argskk[0] + ' ' + argskk[1]);
									argskk[0] = Number(argskk[0]) + Number((temp3 / 1000) * 2);
									argskk[1] = Number(argskk[1]) + Number((temp3 / 1000));
									console.log('after ' + argskk[0] + ' ' + argskk[1]);
									//message.channel.send((temp3 / 1000) * 2 + ' сфк отчислено в Свободные СФК фонда СФК.\n' + (temp3 / 1000) + ' отчислено в Резервные СФК фонда СФК');
									message.channel.send('```js\n' + message.author.username + ' заработал ' + temp3 / 1000 + ' сфанкоинов\n' + message.author.username + ': ' + tempm[666] / 1000 + " сфанкоинов.\n\n" + (temp3 / 1000) * 2 + ' сфк отчислено в Свободные СФК фонда СФК.\n' + (temp3 / 1000) + ' отчислено в Резервные СФК фонда СФК```');
									data3 = '';
									for(i = 0; i<2; i++){
									data3 = data3 + argskk[i] + " ";
									console.log('записываю аргументы в дата2');
									}
								fs.writeFile(filename4,data3);
								});
							}
							else{
								message.reply('Вы уже работали недавно. Вам надо подождать ' + work[i] + ' секунд.');
							}
						}
					}
				});

			}
			if(command.startsWith('пнр')){
				console.log("пнр");
				const args = command.slice(3).trim().split(/ +/g);
				i2 = 0; //обнуление переменной
				for(i = 0; i2 != undefined; i++){ //счет кол-ва слов в сообщении
				console.log("цыкл с счетом");
					if(args[i] === undefined){ //если слово undefined
					console.log("счет кончается " + i);
						i2 = undefined; //кастылб
						var i3 = i;
						console.log("i3 = " + i3);
					}
				}
					var messageto = '';
				for(i = 0; i<i3; i++){
					console.log("чекаю все хрюки");
					if(args[i] === "хрюю") messageto = messageto + "а";
					if(args[i] === "хррю") messageto = messageto + "б";
					if(args[i] === "ххрю") messageto = messageto + "в";
					if(args[i] === "хррюю") messageto = messageto + "г";
					if(args[i] === "ххрюю") messageto = messageto + "д";
					if(args[i] === "ххррю") messageto = messageto + "е";
					if(args[i] === "ххррюю") messageto = messageto + "ё";
					if(args[i] === "хрю-ю") messageto = messageto + "ж";
					if(args[i] === "х-хрю") messageto = messageto + "з";
					if(args[i] === "хрю-р") messageto = messageto + "и";
					if(args[i] === "хр-рюю") messageto = messageto + "й";
					if(args[i] === "хрю-хрю") messageto = messageto + "к";
					if(args[i] === "хрюю-хрю") messageto = messageto + "л";
					if(args[i] === "хррю-хрю") messageto = messageto + "м";
					if(args[i] === "ххрю-хрю") messageto = messageto + "н";
					if(args[i] === "хррюю-хрю") messageto = messageto + "о";
					if(args[i] === "ххрюю-хрю") messageto = messageto + "п";
					if(args[i] === "ххррюю-хрю") messageto = messageto + "р";
					if(args[i] === "хрю-хрюю") messageto = messageto + "с";
					if(args[i] === "хрю-хррю") messageto = messageto + "т";
					if(args[i] === "хрю-ххрю") messageto = messageto + "у";
					if(args[i] === "хрю-ххрюю") messageto = messageto + "ф";
					if(args[i] === "хрю-хррюю") messageto = messageto + "х";
					if(args[i] === "хрю-ххррюю") messageto = messageto + "ц";
					if(args[i] === "хрюю-хрюю") messageto = messageto + "ч";
					if(args[i] === "хрюю-хррю") messageto = messageto + "ш";
					if(args[i] === "хрюю-ххрю") messageto = messageto + "щ";
					if(args[i] === "хрюю-хррюю") messageto = messageto + "ъ";
					if(args[i] === "хрюю-ххрюю") messageto = messageto + "ы";
					if(args[i] === "хрюю-ххррюю") messageto = messageto + "ь";
					if(args[i] === "хррю-хрюю") messageto = messageto + "э";
					if(args[i] === "хррю-хррю") messageto = messageto + "ю";
					if(args[i] === "хррю-ххрю") messageto = messageto + "я";
					if(args[i] === "хрю") messageto = messageto + " ";
					if(args[i] === "!") messageto = messageto + "!";
					if(args[i] === "?") messageto = messageto + "?";
					if(args[i] === ".") messageto = messageto + ".";
					if(args[i] === ",") messageto = messageto + ",";
					if(args[i] === "-") messageto = messageto + "-";
					if(args[i] === ")") messageto = messageto + ")";
					if(args[i] === "(") messageto = messageto + "(";
					
				}
				if(i === i3) message.reply("Ваша фраза на русском:\n```" + messageto + "```");
			}
			if(command.startsWith('пнс')){
				command = command.slice(4);
				messageto = '';
				for(i = 0; i<command.length; i++){
					if(command[i] === "а") messageto = messageto + "хрюю ";
					if(command[i] === "б") messageto = messageto + "хррю ";
					if(command[i] === "в") messageto = messageto + "ххрю ";
					if(command[i] === "г") messageto = messageto + "хррюю ";
					if(command[i] === "д") messageto = messageto + "ххрюю ";
					if(command[i] === "е") messageto = messageto + "ххррю ";
					if(command[i] === "ё") messageto = messageto + "ххррюю ";
					if(command[i] === "ж") messageto = messageto + "хрю-ю ";
					if(command[i] === "з") messageto = messageto + "х-хрю ";
					if(command[i] === "и") messageto = messageto + "хрю-р ";
					if(command[i] === "й") messageto = messageto + "хр-рюю ";
					if(command[i] === "к") messageto = messageto + "хрю-хрю ";
					if(command[i] === "л") messageto = messageto + "хрюю-хрю ";
					if(command[i] === "м") messageto = messageto + "хррю-хрю ";
					if(command[i] === "н") messageto = messageto + "ххрю-хрю ";
					if(command[i] === "о") messageto = messageto + "хррюю-хрю ";
					if(command[i] === "п") messageto = messageto + "ххрюю-хрю ";
					if(command[i] === "р") messageto = messageto + "ххррюю-хрю ";
					if(command[i] === "с") messageto = messageto + "хрю-хрюю ";
					if(command[i] === "т") messageto = messageto + "хрю-хррю ";
					if(command[i] === "у") messageto = messageto + "хрю-ххрю ";
					if(command[i] === "ф") messageto = messageto + "хрю-ххрюю ";
					if(command[i] === "х") messageto = messageto + "хрю-хррюю ";
					if(command[i] === "ц") messageto = messageto + "хрю-ххррюю ";
					if(command[i] === "ч") messageto = messageto + "хрюю-хрюю ";
					if(command[i] === "ш") messageto = messageto + "хрюю-хррю ";
					if(command[i] === "щ") messageto = messageto + "хрюю-ххрю ";
					if(command[i] === "ъ") messageto = messageto + "хрюю-хррюю ";
					if(command[i] === "ы") messageto = messageto + "хрюю-ххрюю ";
					if(command[i] === "ь") messageto = messageto + "хрюю-ххррюю ";
					if(command[i] === "э") messageto = messageto + "хррю-хрюю ";
					if(command[i] === "ю") messageto = messageto + "хррю-хррю ";
					if(command[i] === "я") messageto = messageto + "хррю-ххрю ";
					if(command[i] === " ") messageto = messageto + "хрю ";
					if(command[i] === "!") messageto = messageto + "! ";
					if(command[i] === "?") messageto = messageto + "? ";
					if(command[i] === ".") messageto = messageto + ". ";
					if(command[i] === ",") messageto = messageto + ", ";
					if(command[i] === "-") messageto = messageto + "- ";
					if(command[i] === ")") messageto = messageto + ") ";
					if(command[i] === "(") messageto = messageto + "( ";
				}
				if(i === command.length) message.reply("Ваша фраза на свинском:\n```" + messageto + "```");
			}
			if(command === "анансблять"){
				message.channel.send("@everyone");
				message.channel.send("ВНИМАНИЕ БЛЯЦБ!!\nВышел новый апдейт бота: 'Вместе хрюкать веселее!', теперь вы можете хрюкать и понимать друг друга!!\nДля этого, воспользуйтесь встроенным в меня переводчиком.\n\n!пнс 'текст' - перевести ТЕКСТ на свинский язык!\n\n!пнр ТЕКСТ - перевести **свинский** ТЕКСТ на русский!\n\nДля лучшего использования, пишите команды **КО МНЕ В ЛС!!!**\n\nhave fun.");
			}
			if(command.startsWith('дать')){
				if(message.author.username === 'inga1n'){
					message.reply('Вы не являетесь сообщником СФК.');
					return;
				}
				tempe[1] = 'None';
				tempm[1] = 0;
				tempm[3] = 0;
				tempm[4] = 0;
				tempm[5] = 0;
				const dargs = command.slice(4).trim().split(/ +/g);
				/*if(typeof dargs[1] != number){
					message.reply('Сумма должна быть в виде числа.');
					tempm[1] = 1;
				}*/
				if(dargs[0] === message.author.username){
					message.reply('Вы не можете дать деньги самому себе!');
					tempm[1] = 1;
				}
				if(dargs[0] === '' || dargs[0] === undefined || dargs[0] === NaN || dargs[1] === '' || dargs[1] === undefined || dargs[1] === NaN ){
					message.reply('Невозможно определить аргументы.');
					tempm[1] = 1;
				}
				if(Number(dargs[1]) < 0){
					message.reply('Нельзя отправить сумму, меньшую 0!');
					tempm[1] = 1;
				}
				if(Number(dargs[1]) === 0){
					message.reply('Нельзя отправить сумму, равную 0!');
					tempm[1] = 1;
				}
				if(tempm[1] === 1){
					message.reply('Передача сфанкоинов не удалась.\nИспользование: !дать \"Имя игрока\" \"Сумма\"');
				}
				else{
					var fs = require('fs');
					filename = process.argv[2];
					fs.readFile(filename, 'utf8', function(err, data) {
						const args = data.trim().split(/ +/g);
						for(i = 1; i<args[0]; i++){
						if(args[i] === dargs[0]){
							tempe[1] = args[i-1];
							console.log(tempe[1]);
							tempm[3] = i;
						}
						if(tempm[2] === 'None'){
							message.reply('Игрок не найден.');
						}
						if(tempe[1] != 'None'){
							for(i = 1;i<args[0]; i++){
								if(args[i] === message.author.username){
									tempm[4] = args[i];
									tempm[5] = i;
								}
								if(args[tempm[5]+1] < dargs[1]){
									message.reply('Сумма, которую вы хотите передать ( ' + dargs[1] +  ') больше, чем имеющихся сфанкоинов у вас (' + Number(args[tempm[5]+1]) / 1000 +').\nПередача сфанкоинов не удалась.');
									tempm[1] = 1;
								}
								else{
									console.log('перед передачей ' + args[tempm[3]+1] + ' ' + args[tempm[5]+1]);
									console.log('сумма ' + (Number(args[tempm[3]+1]) + (Number(dargs[1]) * 1000)));
									console.log('разница' + (Number(args[tempm[5]+1]) - (Number(dargs[1]) * 1000)));
									args[tempm[3]+1] = Number(args[tempm[3]+1]) + (Number(dargs[1]) * 1000);
									args[tempm[5]+1] = Number(args[tempm[5]+1]) - (Number(dargs[1]) * 1000);
									console.log('после передачи ' + args[tempm[3]+1] + ' ' + args[tempm[5]+1]);
									message.reply('Успешная передача ' + dargs[1] + ' сфанкоинов от ' + message.author.username + ' к ' + dargs[0] + ' !');
									var fs = require('fs');
										fs.readFile('logs.txt', 'utf8', function(err,data){
											data = data + '\n[' + d.getDate() + '.' + d.getMonth() + '.' + d.getYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + '] '  + ' Успешная передача ' + dargs[1] + ' сфанкоинов от ' + message.author.username + ' к ' + dargs[0] + ' !';
											fs.writeFile('logs.txt', data);
										});
								}
								if(tempm[1] === 0){
									data2 = '';
										for(i = 0; i<=args[0]; i++){
										data2 = data2 + args[i] + " ";
										console.log('записываю аргументы в дата');
										}
									fs.writeFile(filename,data2);
									tempe[1] = 'None';
									for(i = 0; i < 100; i++){
										args[i] = undefined;
									}
								}
							}
						}
					}
				});

			}
		}
		/*if(command.startsWith('бизнес')){
			const pargs = command.slice(6).trim().split(/ +/g);
			tempm[0] = 0;
			tempm[1] = 0;
			if(pargs[0] === NaN || pargs[0] === undefined){
				message.reply('Невозможно определить аргументы.\nИспользование: !бизнес \'Сумма\'');
				tempm[0] = 1;
			}
			if(pargs[0] <= 0){
				message.reply('Введите сумму, большую нуля.');
				tempm[0] = 1;
			}
			if(tempm[0] === 1){
				message.reply('Вложение неудалось.\nИспользование: !бизнес \'Сумма\'');
			}
			if(tempm[0] === 0){
				console.log('иф темпм 0');
				var fs = require('fs');
					filename3 = process.argv[4];
					fs.readFile(filename3, 'utf8', function(err, data) {
						console.log('послерф ' + data);
						console.log('ридфайл');
						const args = data.trim().split(/ +/g);
						console.log('конст аргс');
						for(i = 0; i<args[0]; i++){
							console.log('чек игроков');
							if(args[i] === message.author.username){
								console.log('нашло мессейдж автора');
								console.log('аргс до д ' + args[i+1]);
								args[i+1] = Number(args[i+1]) + (Number(pargs[0]) / 10);
								console.log('аргс после д ' + args[i+1]);
								console.log('мх ' + pargs[0] + ' в намбе ' + Number(pargs[0]) + ' деление' +  Number(pargs[0]) / 10 + ' без намба' + pargs[0] / 10);
								tempm[1] = 1;
								zopa1();
							}
							if(i === args[0]-1){
								zopa1();
							}
							function zopa1(){
							if(tempm[1] === 0){
								console.log('не нашло создаю');
								args[0] = Number(args[0]) + 2;
								args[args[0]-1] = message.author.username;
								args[args[0]] = 0;
								message.reply('Вы завели бизнес. Теперь вложитесь в него, чтобы получать доход.');
								zopa3();
								console.log('первая жопа выполнилась и запустилась ВТОРАЯ');
							}
							else{
								zopa3();
							}
						}

					function zopa3(){
					filename = process.argv[2];
					fs.readFile(filename, 'utf8', function(err, data) {
						const fargs = data.trim().split(/ +/g);
						for(i = 1; i<fargs[0];i++){
							if(fargs[i] === message.author.username){
								if(fargs[i+1] < pargs[0]){
									message.reply('У вас недостаточно денег для вложения.');
									fs.readFile(filename3, 'utf8', function(err, data) {
										const args = data.trim().split(/ +/g);
									args[i+1] = Number(args[i+1]) - (Number(pargs[0]) / 10);
									});
									return;
								}
								else{
								fargs[i+1] = Number(fargs[i+1]) - (Number(pargs[0]) * 1000);
								zopa4();
								fs.readFile(filename3, 'utf8', function(err, data) {
								const args = data.trim().split(/ +/g);
								for(i2=0;i2<args[0];i++){
									if(i2 === message.author.username){
										message.reply('Вы вложились в бизнес в размере ' + pargs[0] + ', теперь вы будете получать каждые 2 минуты ' + args[i2+1] + ' доп. коинов, которые можно заработать на !работе.');
									}
								}
								});
								}
							}
						}
						console.log('ТРЕТЬЯ БЛЯЯТЬ ВЫПОЛНИЛАСЬ И ЗАПУСТИЛАСЬ ЧЕТВЕРТАЯ');
					function zopa4(){
					var data3 = '';
							for(i = 0; i<=fargs[0]; i++){
								data3 = data3 + fargs[i] + " ";
								console.log('дата3 аргс' + i + ': ' + fargs[i]);
								}
							fs.writeFile(filename,data3);
							console.log('ЧЕТВЕРТАЯ ВЫПОЛНИЛАСЬ ОТКУДА ЗДЕСЬ 4 ЖОПЫ ЭТО ЧЕ ПРИТОН СО ШЛЮХАМИ МДА Я ВЫЗВАЮ 911');
					}
					zopa5();
			});
			function zopa5(){
							data2 = '';
							for(i = 0; i<=args[0]; i++){
								data2 = data2 + args[i] + " ";
								console.log('дата2 аргс' + i + ': ' + args[i]);
								}
							fs.writeFile(filename3,data2);
							zopa3();
							console.log('вторая ебанная жОПА ВЫПОЛНИЛАСЬ И ЗАПУСТИЛАСЬ ТРЕТЬЯ');
						}
						}
					}
		});
			}


	}*/
		}
});


client.login('Mzk5MDgyNDgxOTU0ODQ4Nzgx.DTH6UQ.498i4tzwCJ5bS2vhWA9d5x5uZWg');
