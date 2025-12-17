import { SlashCommandBuilder, CommandInteraction } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Mostra o perfil do usuário.'),

    async execute(interaction: CommandInteraction) {
        
        interaction.reply('User')
    }
}