import { getPlayer } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { topEmbedsBuilder, embedPagination } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('top')
        .setDescription('Exibe o top 200 de um player')
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

            const embeds = await topEmbedsBuilder(player)

            await embedPagination(interaction, embeds, "", false, 60000)
    
        }catch(error){

            await interaction.reply(String(error))
        }
    }
}