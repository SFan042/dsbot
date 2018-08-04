const Discord = require('discord.js');
var fs = require('fs');
var prefix = '!';
var command = '';
var temp = [];
var time = [];
var rand = 0;

for(i = 0; i < 999; i++){
	time[i] = 999999;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

function subTime(){
	for(i = 0; i < 200; i++){
		if(time[i] > 0 && time[i] != 999999){
			time[i] = time[i] - 1;
			rand = randomInteger(0,99999);
			var fs = require('fs');
				fs.readFile('ores.txt', 'utf8', function(err,data){
					const args = data.trim().split(/ +/g);
							console.log(time[i]);
							if(rand > 40000 && rand < 60000){
								args[i+1] = Number(args[i+1]) + randomInteger(1,4);
								console.log("уголь");
								data = '';
								for(i = 0; i <= args[0]; i++){
									data = data + args[i] + ' ';
									fs.writeFile("ores.txt",data);
								}
					}
				});
		}
	}
	setTimeout(subTime,1000);
}

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
	//━━━━━━━━━━━━━━━━━━━━━━━•
	if(cargs[0] === 'работа'){
		if(cargs[1] === undefined){
		var fs = require('fs');
		fs.readFile('ores.txt', 'utf8', function(err,data){
			const args = data.trim().split(/ +/g);
			temp[4] = 0;
			for(i = 1; i<args[0]; i++){
						if(args[i] === message.author.username){
							temp[4] = 1;
							message.channel.send("```js\nРабота " + message.author.username + "\n•━━━━━━━━━━━━━━━━━━━━━━━•\n•Уголь: " + args[i+1] + " штук.\n•Железо: " + args[i+2] + " штук.\n•Золото:  " + args[i+3] + " штук.\n•Алмазы: " + args[i+4] + " штук.\n━━━━━━━━━━━━━━━━━━━━━━━\nДоступные действия:\n\"!работа продать\" - узнать цены на руды, курс ШахтоКоинов, продать руды, обменять ШахтоКоины на СфанКоины.\n\"!работа шахта\" - начать работать на шахте.```");
						}
			}
						if(temp[4] === 0){
							temp[4] = 0;
							data2 = data;
							const args2 = data2.trim().split(/ +/g);
							args2[Number(args2[0])+1] = message.author.username;
							args2[Number(args2[0])+2] = 0;
							args2[Number(args2[0])+3] = 0;
							args2[Number(args2[0])+4] = 0;
							args2[Number(args2[0])+5] = 0;
							args2[0] = Number(args2[0]) + 5;
							message.channel.send("```js\nРабота " + message.author.username + "\n•━━━━━━━━━━━━━━━━━━━━━━━•\n•Уголь: " + args2[i+2] + " штук.\n•Железо: " + args2[i+3] + " штук.\n•Золото:  " + args2[i+4] + " штук.\n•Алмазы: " + args2[i+5] + " штук.\n━━━━━━━━━━━━━━━━━━━━━━━\nДоступные действия:\n\"!работа продать\" - узнать цены на руды, курс ШахтоКоинов, продать руды, обменять ШахтоКоины на СфанКоины.\n\"!работа шахта\" - начать работать на шахте.```");
							data2 = '';
							for(i = 0; i<=args2[0]; i++){
								data2 = data2 + args2[i] + " ";
								}
							fs.writeFile("ores.txt",data2);
						}
		});
		}
		if(cargs[1] === "продать"){
			if(cargs[2] === undefined){
				var fs = require('fs');
				fs.readFile('ores.txt', 'utf8', function(err,data){
					const args = data.trim().split(/ +/g);
					temp[4] = 0;
						for(i = 1; i<args[0]; i++){
							if(args[i] === message.author.username){
								message.channel.send("```js\nРабота " + message.author.username + "\n━━━━━━━━━━━━━━━━━━━━━━━\n•Уголь: " + Number(args[i+1]) * 0.5 + " сфк. (цена за шт. - 0.5 сфк.)\n•Железо: " + Number(args[i+2]) * 5 + " сфк. (цена за шт. - 5 сфк.)\n•Золото: " + Number(args[i+3]) * 36 + " сфк. (цена за шт. - 36 сфк.)\n•Алмаз: " + Number(args[i+4]) * 172 + " сфк. (цена за шт. - 172 сфк.)\n•━━━━━━━━━━━━━━━━━━━━━━━•\n\"!работа продать \[Название\]\" - продать руду \[Название\].```");
							}
			}
		});
			}
			if(cargs[2] != undefined){
				temp[6] = 0;
				if(cargs[2] === "Уголь"){
					var fs = require('fs');
					fs.readFile('ores.txt', 'utf8', function(err,data){
						const args = data.trim().split(/ +/g);
							for(i = 1; i<args[0]; i++){
								if(args[i] === message.author.username){
									if(args[i+1] != 0){
										temp[5] = Number(args[i+1]) * 0.5;
										args[i+1] = 0;
										data = '';
										for(i = 0; i<=args[0]; i++){
											data = data + args[i] + " ";
											}
										fs.writeFile("ores.txt",data);
									}
									else{
										message.reply("У вас нету угля, чтобы продать его!");
										temp[6] = 1;
									}
								}
				}
				});
				if(temp[6] === 0){
					var fs = require('fs');
					fs.readFile('koshel.txt', 'utf8', function(err,data){
						var fs = require('fs');
						const args = data.trim().split(/ +/g);
						for(i = 1; i<args[0]; i++){
							if(args[i] === message.author.username){
								data2 = data;
								const args2 = data2.trim().split(/ +/g);
								args2[i+1] = Number(args2[i+1]) + Number(temp[5]);
								data2 = '';
								message.reply("Вы продали уголь, вы получили: " + temp[5] + " сфк.");
								for(i = 0; i<=args2[0]; i++){
									data2 = data2 + args2[i] + " ";
									}
								fs.writeFile("koshel.txt",data2);
						}
			}
					});
				}
			}
			
		}
		}
		if(cargs[1] === "шахта"){
			var fs = require('fs');
				fs.readFile('koshel.txt', 'utf8', function(err,data){
					var fs = require('fs');
					const args = data.trim().split(/ +/g);
					for(i = 1; i<args[0]; i++){
						if(args[i] === message.author.username){
							if(time[i] === 0 || time[i] === 999999){
								time[i] = 120;
								message.reply("Вы начали копать шахту. Через 2 минуты вы закончите, и узнаете, что вы добыли.");
								subTime();
							}
							if(time[i] != 0 && time[i] != 999999){
								message.reply("Вы все еще копаете шахту! Вам осталось копать: " + time[i] + " секунд.");
							}
						}
					}
		});
		temp[4] = 0;
		temp[5] = 0;
		temp[6] = 0;
	}
}
	}
});
client.login(process.env.BOT_TOKEN);
