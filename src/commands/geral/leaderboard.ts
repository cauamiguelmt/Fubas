import { getBeatmap } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { leaderboardEmbedsBuilder, embedPagination, extractBeatmapId } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Exibe a leaderboard de um beatmap')
        .addStringOption(option => 
            option.setName('beatmap')
                .setDescription('Link ou ID do beatmap')
                .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        try{
        
            const insertedBeatmap = interaction.options.getString('beatmap', true) // Pega o link ou id do beatmap fornecido no comando
            const beatmap = (insertedBeatmap.includes('/'))
                ? await getBeatmap(await extractBeatmapId(insertedBeatmap)) // Extrai ID caso seja link
                : await getBeatmap(insertedBeatmap) // Já é o ID

            const embeds = await leaderboardEmbedsBuilder(beatmap)

            await embedPagination(interaction, embeds, "", false, 60000);
        
        }catch(error){

            await interaction.reply(String(error))
        }
    }
} 