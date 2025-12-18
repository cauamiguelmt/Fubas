import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Mostra um perfil de osu! no Fubika'),

    async execute(interaction: CommandInteraction) {
        
        // Emojis de rank
        const emojiXH = "<:rankingXHsmall2x:1451026695569281146>";
        const emojiX = "<:rankingXsmall2x:1451026724513906698>"; 
        const emojiSH = "<:rankingSHsmall2x:1451026620310753382>";
        const emojiS = "<:rankingSsmall2x:1451026644579127476>"; 
        const emojiA = "<:rankingAsmall2x:1451026496968986795>";

        const embed = new EmbedBuilder()
        .setAuthor({ 
            name: 'osu! Standard Profile for Loopyng', 
            iconURL: 'https://iili.io/fcDwBEJ.png', // URL do Fubas.png
            url: 'https://osu.ppy.sh/users/loopyng' // Link para o perfil do usuário
        })
        .setColor("#436990") // Azul Escuro
        .setThumbnail('https://iili.io/fcihcyG.jpg') // URL do avatar do usuário
        .setDescription(`
• **Fubika Rank:** \`#1\`
• **PP:** \`4,863.27\` • **Acc:** \`97.98%\`
• **Level:** \`100 + 25.00%\`
• **Playcount:** \`27,077\` (\`520 hrs\`)
• **Ranks:** ${emojiXH} \`2\` ${emojiX} \`5\` ${emojiSH} \`49\` ${emojiS} \`148\` ${emojiA} \`604\`
        `)
        .setFooter({ 
            text: 'Last Seen 3 Days Ago on osu! Fubika', 
            iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Basic_red_dot.png/600px-Basic_red_dot.png'
        });
        
        interaction.reply({
            embeds: [embed]
        })
    }
}