import { postCheckLink } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js"
import { defaultEmbedBuilder } from "../../utils/utils.export"

export default {
    data: new SlashCommandBuilder()
        .setName('auth')
        .setDescription('Verifica um código gerado para linkagem ao discord')
        .addStringOption(option => 
            option.setName('code')
                .setDescription('Código gerado')
                .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {

        try{
            
            const insertedCode = interaction.options.getString('code', true); // Pega o code fornecido no comando
            const { sucess, message } = await postCheckLink(interaction.user.id, insertedCode)

            const mensagemComplemento = sucess ? '!' : ''

            const embed = await defaultEmbedBuilder(message + mensagemComplemento)
            
            await interaction.reply({
                ephemeral: true,
                embeds: [embed]
            })

        }catch(error){

            await interaction.reply(String(error))
        }
    }
}