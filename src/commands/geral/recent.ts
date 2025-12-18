import { SlashCommandBuilder, CommandInteraction, EmbedBuilder, time, TimestampStyles} from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('recent')
        .setDescription('Mostra o score mais recente de um usuário'),

    async execute(interaction: CommandInteraction) {
        
        const emojiXH = "<:rankingXHsmall2x:1451026695569281146>";
        const miss = "<:miss:1451028123553497281>";
        const tab = "\u2003";
        const date = new Date('2025-12-18T01:00:00Z');
        const relativeTime = time(date, TimestampStyles.RelativeTime);

        const embed = new EmbedBuilder()
        .setAuthor({ 
            name: 'Loopyng: 4,863.27pp (#1)', 
            iconURL: 'https://iili.io/fcDwBEJ.png', // URL do Fubas.png
            url: 'https://osu.ppy.sh/users/loopyng' // Link para o perfil do usuário
        })
        .setTitle('The Quick Brown Fox - The Big Black [WHO\'S AFRAID OF THE BIG BLACK] [10.71★]')
        .setURL('https://osu.ppy.sh/beatmapsets/41823#osu/131891')
        .setColor("#436990") // Azul Escuro
        .setThumbnail('https://assets.ppy.sh/beatmaps/41823/covers/fullsize.jpg')
        .setDescription(`
### __Personal Best #1__
${emojiXH} **+DTHDHR${tab}1,780,800${tab}100%**${tab}${relativeTime}
**1923.19**/1923.19PP • **1337x**/1337x • 0${miss}
\`1:14\` • \`540.45\` BPM • \`CS: 5.2 AR: 11 OD: 10.98 HP: 7\`
        `)
        .setFooter({ 
            text: 'Mapset by Blue Dragon • Ranked',
        });
        
        interaction.reply({
            embeds: [embed]
        })
    }
}