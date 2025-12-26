import { getBeatmap, getPlayer } from "../../services/apiCalls"
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { compareEmbedBuilder, extractBeatmapId } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('compare')
        .setDescription('Compara o score de um player em um beatmap')
        .addStringOption(option => 
            option.setName('beatmap')
            .setDescription('Link ou ID do beatmap')
            .setRequired(true)
        )
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

            const insertedBeatmap = interaction.options.getString('beatmap', true) // Pega o link ou id do beatmap fornecido no comando
            const beatmap = (insertedBeatmap.includes('/'))
                ? await getBeatmap(await extractBeatmapId(insertedBeatmap)) // Extrai ID caso seja link
                : await getBeatmap(insertedBeatmap) // Já é o ID

            const embed = await compareEmbedBuilder(beatmap, player)

            await interaction.reply({
                embeds: [embed]
            })
    
        }catch(error){

            await interaction.reply(String(error))
        }
    }
}