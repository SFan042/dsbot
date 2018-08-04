const Discord = require('discord.js');
var fs = require('fs');
var command = '';
var temp = [];
var prefix = '!';
const config = require("./config.json");

const client = new Discord.Client();
client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix)){
		command = message.content.slice(prefix.length);
		const cargs = command.trim().split(/ +/g);
		if(cargs[0] === "кошелек" || cargs[0] === "кошелёк"){
			console.log(cargs[0] + " " + cargs[1]);
		if(cargs[1] === undefined){
		var fs = require('fs');
		fs.readFile('koshel.txt', 'utf8', function(err,data){
			const args = data.trim().split(/ +/g);
			temp[0] = 0;
			for(i = 1; i<args[0]; i++){
				if(args[i] === message.author.username){
					temp[0] = 1;
					message.channel.send("```js\nКошелек "+ message.author.username + ': \n━━━━━━━━━━━━━━━━━━━━━━━\n| • СфанКоины: ' + args[i+1] + '```');
				}
			}
			if(temp[0] === 0){
				message.channel.send(message.author.username + " завел кошелек, и теперь имеет **100** сфанкоинов!");
				data2 = data;
				const args2 = data2.trim().split(/ +/g);
				args2[Number(args2[0])+1] = message.author.username;
				args2[Number(args2[0])+2] = 100;
				args2[0] = Number(args2[0]) + 2;
				data2 = '';
				for(i = 0; i<=args2[0]; i++){
							data2 = data2 + args2[i] + " ";
						}
				fs.writeFile("koshel.txt",data2);
			}
			console.log(temp[0]);
	});
	}
	if(cargs[1] != undefined){
		var fs = require('fs');
		fs.readFile('koshel.txt', 'utf8', function(err,data){
			const args = data.trim().split(/ +/g);
			temp[0] = 0;
			for(i = 1; i<args[0]; i++){
				if(args[i] === cargs[1]){
					temp[0] = 1;
					message.channel.send("```js\nКошелек "+ cargs[1] + ': \n━━━━━━━━━━━━━━━━━━━━━━━\n| • СфанКоины: ' + args[i+1] + '```');
				}
			}
			if(temp[0] === 0){
				message.reply("Кошелек у " + cargs[1] + " не найден!");
			}
			console.log(temp[0]);
	});
	}
	}
	if(cargs[0] === "дать"){
		temp[1] = 0;
		if(isNaN(Number(cargs[2]))){
			message.reply("Аргумент не является числом, хотя должен: " + cargs[2]);
			temp[1] = 1;
		}
		var fs = require('fs');
		fs.readFile('koshel.txt', 'utf8', function(err,data){
			const args = data.trim().split(/ +/g);
			temp[0] = 0;
			if(cargs[1] === message.author.username){
				temp[1] = 1;
				message.reply("Вы не можете дать денег самому себе!");
				}
			for(i = 1; i<args[0]; i++){
				if(args[i] === cargs[1]){
					temp[2] = 1;
					temp[3] = i;
				}
			}
				if(temp[2] === 0){
					message.reply("Кошелек у " + cargs[1] + " не найден!");
					temp[1] = 1;
				}
				if(temp[1] === 1){
					message.reply("Передача денег не удалась!");
				}
				console.log("temp 1 = " + temp[1] + " temp 2 = " + temp[2]);
				if(temp[1] === 0 && temp[2] === 1){
					for(i = 1; i<args[0]; i++){
						if(args[i] === message.author.username){
							data2 = data;
							const args2 = data2.trim().split(/ +/g);
							args2[temp[3]+1] = Number(args2[temp[3]+1]) + Number(cargs[2]);
							args2[i+1] = Number(args2[i+1]) - Number(cargs[2]);
							message.reply("Успешная передача " + cargs[2] + " сфанкоинов от " + message.author.username + " к " + cargs[1] + "!\nТекущий счёт " + cargs[1] + ": " + args2[temp[3]+1] + "\nТекущий счёт " + message.author.username + ": " + args2[i+1]);
							data2 = '';
							for(i = 0; i<=args2[0]; i++){
								data2 = data2 + args2[i] + " ";
								}
							fs.writeFile("koshel.txt",data2);
				}
			}
				}
				temp[0] = 0;
				temp[1] = 0;
				temp[2] = 0;
				temp[3] = 0;
		});
	}
	}
});

client.login(process.env.BOT_TOKEN);
