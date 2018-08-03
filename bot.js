const Discord = require('discord.js');

const client = new Discord.Client();
client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'Привет')) {
		message.channel.send('Привет, ' + message.author);
	}
});

client.login('Mzk5MDgyNDgxOTU0ODQ4Nzgx.DTH6UQ.498i4tzwCJ5bS2vhWA9d5x5uZWg');
