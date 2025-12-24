import { postCreateLink } from "../../services/apiCalls";
import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from "discord.js"
import { URLS, COLORS } from "../../constants"

export default {
    data: new SlashCommandBuilder()
        .setName('osu-link')
        .setDescription('Manda um código de autorização para sua DM em jogo')
        .addStringOption(option => 
            option.setName('nick')
                .setDescription('Nick do Fubika para linkar ao seu discord')
                .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {

        try{
            
            const nickToLink = interaction.options.getString('nick'); // Pega o nick fornecido no comando
            const { sucess, message } = await postCreateLink(interaction.user.id, String(nickToLink))
            
            const mensagemComplemento = sucess ? '\nProssiga utilizando \`/auth\` para inserir o código!' : ''

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