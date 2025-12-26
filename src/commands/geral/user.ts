import { getPlayer } from "../../services/apiCalls"
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { userEmbedBuilder } from "../../utils/utils.export"

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Exibe um perfil de osu! no Fubika')
        .addStringOption(option => 
            option.setName('player')
                .setDescription('Nick do player')
                .setRequired(false)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        try{

            const insertedPlayer = interaction.options.getString('player') // Pega o player fornecido (ou não) no comando
            const player = (insertedPlayer == null)
                ? await getPlayer(interaction.user.id) // Player não foi fornecido
                : await getPlayer(insertedPlayer) // Player fornecido

            const { embed, attachment } = await userEmbedBuilder(player)     

            await interaction.reply({
                embeds: [embed],
                files: [attachment]
            })

        }catch(error){

            await interaction.reply(String(error))
        }
    }
}