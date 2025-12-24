import { postCheckLink } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from "discord.js"
import { URLS, COLORS } from "../../constants"

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
            
            const insertedCode = interaction.options.getString('code'); // Pega o code fornecido no comando
            const { sucess, message } = await postCheckLink(interaction.user.id, String(insertedCode))

            const mensagemComplemento = sucess ? '!' : ''

            const embed = new EmbedBuilder()
            .setColor(COLORS.blue)
            .setDescription(message + mensagemComplemento)
            .setFooter({ 
                text: 'on osu! Fubika\'s Server',
                iconURL: URLS.fubikaIcon
            });
            
            await interaction.reply({
                ephemeral: true,
                embeds: [embed]
            })

        }catch(error){

            await interaction.reply(String(error))
        }
    }
}