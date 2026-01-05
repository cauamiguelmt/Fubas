import { postGenerateApiKey } from "../../services/apiCalls"
import { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags } from "discord.js"
import { defaultEmbedBuilder } from "../../utils/utils.export"

export default {
    data: new SlashCommandBuilder()
        .setName('generate-api-key')
        .setDescription('Gera uma chave para a api do server do Fubika')
        .addStringOption(option => 
            option.setName('application-name')
            .setDescription('Nome da aplicação')
            .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply({ flags: MessageFlags.Ephemeral })
        
        try{

            const application_name = interaction.options.getString('application-name', true)
            const { key } = await postGenerateApiKey(interaction.user.id, application_name) 

            await interaction.user.send(`Api key: ||**${key}**||\nNão compartilhe ela com outras pessoas!`)

            const embed = await defaultEmbedBuilder('A api key gerada foi enviada para sua DM!')

            await interaction.followUp({
                ephemeral: true,
                embeds: [embed]
            })

        }catch(error){

            await interaction.followUp(String(error))
        }
    }
}