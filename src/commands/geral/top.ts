import { getPlayer } from "../../services/apiCalls";
import { SlashCommandBuilder, CommandInteraction } from "discord.js"
import { topEmbedsBuilder, embedPagination } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('top')
        .setDescription('Mostra seu top200'),

    async execute(interaction: CommandInteraction) {
        
        try{
        
            const player = await getPlayer(interaction.user.id)

            const embeds = await topEmbedsBuilder(player)

            await embedPagination(interaction, embeds, "", false, 60000);
    
        }catch(error){

            await interaction.reply(String(error))
        }
    }
}