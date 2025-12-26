import { getPlayer } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { top200EmbedsBuilder, embedPagination, topIndexEmbedBuilder } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('top')
        .setDescription('Exibe o top 200 de um player')
        .addStringOption(option => 
            option.setName('player')
                .setDescription('Nick do player')
                .setRequired(false)
        )
        .addNumberOption(option => 
            option.setName('index')
                .setDescription('Ranking da play')
                .setRequired(false)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        try{
        
            const insertedPlayer = interaction.options.getString('player') // Pega o player fornecido (ou não) no comando
            const player = (insertedPlayer === null)
                ? await getPlayer(interaction.user.id) // Player não foi fornecido
                : await getPlayer(insertedPlayer) // Player fornecido

            const insertedIndex = interaction.options.getNumber('index') // Pega o index fornecido (ou não) no comando
            if (insertedIndex === null) {
                const { embeds, attachment } = await top200EmbedsBuilder(player)
                await embedPagination(interaction, embeds, "", false, 60000, attachment)
            
            }else{

                if (!player.top_200)
                    throw new Error("Scores data are missing")

                const score = player.top_200[insertedIndex - 1]
                if (!score) {
                    await interaction.reply('Não há scores nesse index') // <--- fazer embed
                    return
                }

                const embed = await topIndexEmbedBuilder(player, score, insertedIndex)

                await interaction.reply({
                    embeds: [embed]
                })

            }
    
        }catch(error){

            await interaction.reply(String(error))
        }
    }
}