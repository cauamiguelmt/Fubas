import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('link')
        .setDescription('Define o nick linkado ao seu discord')
        .addStringOption(option => 
            option.setName('nick')
                .setDescription('Nick do Fubika para linkar ao seu discord')
                .setRequired(true)
        ),

    async execute(interaction: ChatInputCommandInteraction) {
        
        const user = interaction.user; // Pega o usuário que executou o comando
        const member = await interaction.guild?.members.fetch(user.id).catch(() => null); // Pega o membro do servidor, ou null se não conseguir
        // Define os dados escolhendo a melhor opção
        const displayName = member ? member.displayName : user.username; // Pega o nick do servidor, ou o Username se não tiver
        const displayAvatar = member ? member.displayAvatarURL() : user.displayAvatarURL(); // Pega avatar do servidor se tiver
        const nickToLink = interaction.options.getString('nick'); // Pega o nick fornecido no comando

        const embed = new EmbedBuilder()
        .setAuthor({ 
            name: 'Loopyng: 4,863.27pp (#1)', 
            iconURL: displayAvatar, // URL da foto do usuário
        })
        .setColor("#436990") // Azul Escuro
        .setThumbnail('https://osu.ppy.sh/users/loopyng')
        .setDescription(`
**${displayName}**, seu username linkado foi editado para: \`${nickToLink}\` :white_check_mark:
        `)
        .setFooter({ 
            text: 'on osu! Fubika\'s Server',
            iconURL: 'https://iili.io/fcDwBEJ.png'
        });
        
        interaction.reply({
            ephemeral: true,
            embeds: [embed]
        })
    }
}