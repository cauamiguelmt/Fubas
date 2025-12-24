import { getBeatmap, getPlayer } from "../../services/apiCalls"
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { compareEmbedBuilder } from "../../utils/utils.export";

export default {
    data: new SlashCommandBuilder()
        .setName('compare')
        .setDescription('Compara um score em um beatmap')
        .addStringOption(option => 
            option.setName('beatmap')
                .setDescription('Link do beatmap (id por enquanto)') // <--- Alterar
                .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        try{
                
            const insertedBeatmap = interaction.options.getString('beatmap'); // Pega o beatmap fornecido no comando
            const beatmap = await getBeatmap(String(insertedBeatmap))
            const player = await getPlayer(interaction.user.id)

            const embed = await compareEmbedBuilder(beatmap, player)

            await interaction.reply({
                embeds: [embed]
            })
    
        }catch(error){

            await interaction.reply(String(error))
        }
    }
}