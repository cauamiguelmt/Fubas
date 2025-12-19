import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Mostra um perfil de osu! no Fubika'),

    async execute(interaction: CommandInteraction) {
        
        // --- Simulação de perfil do usuário ---
        const username = "Loopyng";
        const userUrl = "https://osu.ppy.sh/users/loopyng";
        const userAvatarUrl = "https://iili.io/fcihcyG.jpg";
        const userRank = 1;
        const userPP = "4,863.27";
        const userAcc = 97.98;
        const userLevel = "100 + 25.00";
        const userPlaycount = "27,077";
        const userPlaytime = 520;
        const userRanks = {
            XH: 2,
            X: 5,
            SH: 49,
            S: 148,
            A: 604
        };
        const userLastSeen: string = "3 days"; // "Tempo" ou "Online"
        // ---------------------
        
        // Emojis de rank
        const emojiXH = "<:rankingXHsmall2x:1451026695569281146>";
        const emojiX = "<:rankingXsmall2x:1451026724513906698>"; 
        const emojiSH = "<:rankingSHsmall2x:1451026620310753382>";
        const emojiS = "<:rankingSsmall2x:1451026644579127476>"; 
        const emojiA = "<:rankingAsmall2x:1451026496968986795>";
        
        const displayLastSeen = userLastSeen === "Online" ? "Online on osu! Fubika" : `Last Seen ${userLastSeen} Ago on osu`;
        const displayLastSeenIcon = userLastSeen === "Online" ? // Green dot : Red dot
                                                                'https://www.freepnglogos.com/uploads/dot-png/green-dot-clip-art-clkerm-vector-clip-art-online-10.png'
                                                              : 'https://www.freepnglogos.com/uploads/dot-png/red-glossy-dot-clip-art-clkerm-vector-clip-art-18.png';
        
        const embed = new EmbedBuilder()
        .setAuthor({ 
            name: `osu! Standard Profile for ${username}`, 
            iconURL: 'https://iili.io/fcDwBEJ.png', // URL do Fubas.png
            url: userUrl
        })
        .setColor("#4189D3") // Azul
        .setThumbnail(userAvatarUrl)
        .setDescription(`
• **Fubika Rank:** \`#${userRank}\`
• **PP:** \`${userPP}\` • **Acc:** \`${userAcc}%\`
• **Level:** \`${userLevel}%\`
• **Playcount:** \`${userPlaycount}\` (\`${userPlaytime} hrs\`)
• **Ranks:** ${emojiXH} \`${userRanks.XH}\` ${emojiX} \`${userRanks.X}\` ${emojiSH} \`${userRanks.SH}\` ${emojiS} \`${userRanks.S}\` ${emojiA} \`${userRanks.A}\`
        `)
        .setFooter({ 
            text: displayLastSeen, 
            iconURL: displayLastSeenIcon
        });
        
        interaction.reply({
            embeds: [embed]
        })
    }
}