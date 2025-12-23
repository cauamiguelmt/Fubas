import { postInvite } from "../../services/apiCalls"
import { SlashCommandBuilder, CommandInteraction } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Cria um invite para o server do Fubika'),

    async execute(interaction: CommandInteraction) {
        
        try{

            const { code } = await postInvite(interaction.user.id)    

            await interaction.user.send("Seu código é: " + code)

        }catch(error){

            await interaction.reply(String(error))
        }
    }
}