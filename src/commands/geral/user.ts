import { getPlayer } from "../../services/apiCalls"
import { SlashCommandBuilder, CommandInteraction } from "discord.js"
import { userEmbedBuilder } from "../../utils/utils.export"

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Mostra seu perfil de osu! no Fubika'),

    async execute(interaction: CommandInteraction) {
        
        try{

            const player = await getPlayer(interaction.user.id)

            const embed = await userEmbedBuilder(player)        

            await interaction.reply({
                embeds: [embed]
            })

        }catch(error){

            await interaction.reply(String(error))
        }
    }
}