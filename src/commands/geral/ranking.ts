import { getGlobalRanking } from "../../services/apiCalls"
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { rankingEmbedsBuilder, embedPagination } from "../../utils/utils.export"

export default {
    data: new SlashCommandBuilder()
        .setName('ranking')
        .setDescription('Exibe o ranking do servidor')
        .addStringOption(option => 
            option.setName('mode')
                .setDescription('Nick do player')
                .setRequired(false)
                .addChoices(
                    { name: 'osu', value: '0' },
                    { name: 'taiko', value: '1' },
                    { name: 'ctb', value: '2' },
                    { name: 'mania', value: '3' }
                )
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        try{

            const selectedMode = interaction.options.getNumber('mode') // Pega o modo fornecido (ou não) no comando
            const ranking = (selectedMode === null)
                ? await getGlobalRanking(0) // Std como padrão
                : await getGlobalRanking(selectedMode) // Modo fornecido

            const embeds = (selectedMode === null)
                ? await rankingEmbedsBuilder(ranking, 0)
                : await rankingEmbedsBuilder(ranking, selectedMode)

            await embedPagination(interaction, embeds, "", false, 60000) 

        }catch(error){

            await interaction.reply(String(error))
        }
    }
}