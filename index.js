import DiscordJS, { Intents, Interaction } from 'discord.js';
import dotenv from 'dotenv';
import {Player, Unrated, Competitive} from './models.js';
dotenv.config()


const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('The bot is ready');

  const guildId = '735069666778546257';
  const guild = client.guilds.cache.get(guildId);
  let commands;

  if(guild){
    commands = guild.commands;
  } else {
    commands = client.application.commands;
  }

  commands.create({
    name: 'view',
    options: [
      {'type': 'SUB_COMMAND', 'name': 'agents', 'description': 'View agents', },
      {'type': 'SUB_COMMAND', 'name': 'maps', 'description': 'View maps', },
      {'type': 'SUB_COMMAND', 'name': 'comp', 'description': 'View available competitives matches', },
      {'type': 'SUB_COMMAND', 'name': 'unrated', 'description': 'View available unrated matches', },
    ],
    description: 'View command',
  })

})

client.on('interactionCreate', async (interaction) => {
  if(!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction;

  if(commandName === 'view') {
    const subcommand = options.getSubcommand();

    if(subcommand === 'agents') {
      interaction.reply({
        content: 'Brim, Sova, Jett, Killjoy...',
        // ephemeral: true
      })
    }

    if(subcommand === 'maps') {
      interaction.reply({
        content: 'Icebox, Split, Bind...',
        // ephemeral: true
      })
    }

  }

})


client.login(process.env.TOKEN);