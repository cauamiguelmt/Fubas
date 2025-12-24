import { getBeatmap } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { leaderboardEmbedsBuilder, embedPagination } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Mostra a leaderboard de um beatmap')
        .addStringOption(option => 
            option.setName('beatmap')
                .setDescription('Link do beatmap (id por enquanto)') // <--- Alterar
                .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        try{
        
            const insertedBeatmap = interaction.options.getString('beatmap'); // Pega o beatmap fornecido no comando
            const beatmap = await getBeatmap(String(insertedBeatmap))

            const embeds = await leaderboardEmbedsBuilder(beatmap)

            await embedPagination(interaction, embeds, "", false, 60000);
        
        }catch(error){

            await interaction.reply(String(error))
        }
    }
} 