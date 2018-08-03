const Discord = require('discord.js');
var prefix = '!';

const client = new Discord.Client();
client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'тест')) {
		message.channel.send('ыщы');
	}
});

client.login('Mzk5MDgyNDgxOTU0ODQ4Nzgx.DTH6UQ.498i4tzwCJ5bS2vhWA9d5x5uZWg');
