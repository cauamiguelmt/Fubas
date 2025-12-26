import { getPlayer, getRecent } from "../../services/apiCalls"
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { recentEmbedBuilder, noRecentScoresEmbedBuilder } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('recent')
        .setDescription('Exibe o score mais recente de um player')
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

            const [ score ] = (insertedPlayer == null)
                ? await getRecent(interaction.user.id) // Player não foi fornecido
                : await getRecent(insertedPlayer) // Player fornecido

            // Caso o player ainda não possua scores
            if (!score) { 

                const { embed, attachment } = await noRecentScoresEmbedBuilder(player);        

                return await interaction.reply({
                    embeds: [embed],
                    files: [attachment]
                })
            }
            
            const embed = await recentEmbedBuilder(player, score)

            await interaction.reply({
                embeds: [embed]
            })
    
        }catch(error){

            await interaction.reply(String(error))
        }
    }
}