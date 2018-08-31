const Discord = require('discord.js');
const config = require("./config.json");
var fs = require('fs');
var prefix = '!';
var command = '';
var playing = false;
var players = [''];
var current = 0;
var type = 0;
var ingame = false;
var stavka = 0;
var pstav = [''];
var num = 0;

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

const client = new Discord.Client();
client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix)){
		command = message.content.slice(prefix.length);
		const cargs = command.trim().split(/ +/g);
		if(cargs[0] === "лотерея" && playing === false){
			console.log(cargs[1]);
			if(cargs[1] === undefined){
				message.channel.send("```js\nВыберите тип лотереии:\nОбычная: стандартная лотерея, выбирайте на что будете ставить (красные, черные, зиро), и крутите рулетку.\n\nКоэффицент(не готово)\n\nИспользование: !лотерея <тип>```");
			}
			if(cargs[1] === "обычная" || cargs[1] === "Обычная"){
				playing = true;
				current = 0;
				type = 1;
				message.channel.send("Каждый игрок, который будет играть, должен ввести !учавствую. Для начала: !старт");
			}
		}
		if(command === "учавствую" && playing === true && ingame === false){
			players[current] = message.author.username;
			current = current + 1;
			message.channel.send(message.author.username + " принят.");
		}
		if(command === "старт" && playing === true && ingame === false){
			ingame = true;
			stavka = 0;
			message.channel.send(players[stavka] + ", делайте ставку! Пишите: !ставка <тип> .\nТип ставки: Чёрное, Красное, Зиро.");
		}
		if(cargs[0] === "ставка" && ingame === true && playing === true && stavka != 999){
			if(cargs[1] === "Зиро" || cargs[1] === "Чёрное" || cargs[1] === "Красное"){
				message.channel.send("Ставка " + players[stavka] + " - " + cargs[1]);
				pstav[stavka] = cargs[1];
				stavka = stavka + 1;
				if(stavka === current){
					stavka = 999;
					message.channel.send("Игроки сделали ставки.");
					num = randomInteger(0,37);
					if(num < 14){
						message.channel.send("Выпало **красное**!");
						for(i = 0; i < current; i++){
							if(pstav[i] === "Красное"){
								message.channel.send(players[i] + " выиграл!");
							}
						}
					}
					if(num > 13 && num != 37){
						message.channel.send("Выпало **чёрное**!");
						for(i = 0; i < current; i++){
							if(pstav[i] === "Чёрное"){
								message.channel.send(players[i] + " выиграл!");
							}
						}
					}
					if(num === 37){
						message.channel.send("Выпало **ЗИРО**!");
						for(i = 0; i < current; i++){
							if(pstav[i] === "Зиро"){
								message.channel.send(players[i] + " выиграл!");
							}
						}
					}
					ingame = false;
					stavka = 999;
					playing = false;
					current = 0;
				}
			}
		}
	}
});
client.login(process.env.BOT_TOKEN);
