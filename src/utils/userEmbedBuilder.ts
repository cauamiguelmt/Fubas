import { EmbedBuilder } from "discord.js"
import { IPlayer } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"

export default async function userEmbedBuilder(player: IPlayer): Promise<EmbedBuilder> {

    const options = {
        maximumFractionDigits: 2 
    };

    const playerPlaycount = 27077
    const playerLevel = 100
    let playerLastSeen = "3 days"

    const displayLastSeen = playerLastSeen === "Online" ? "Online on osu! Fubika" : `Last Seen ${playerLastSeen} Ago on osu`
    const displayLastSeenIcon = playerLastSeen === "Online" ? URLS.greenDot  : URLS.redDot

    return new EmbedBuilder()
        .setAuthor({ 
            name: `osu! Standard Profile for ${player.name}`, 
            iconURL: URLS.fubikaIcon,
            url: player.url
        })
        .setColor(COLORS.blue)
        .setThumbnail(player.pfp)
        .setDescription(`
• **Fubika Rank:** \`#${player.rank}\`
• **PP:** \`${player.pp.toLocaleString('en-US', options)}\` • **Acc:** \`${player.acc.toLocaleString('en-US', options)}%\`
• **Level:** \`${playerLevel}%\`
• **Playcount:** \`${playerPlaycount.toLocaleString('en-US')}\` (\`${player.playtime} hrs\`)
•  ${EMOJIS.rankXH} \`${player.ssh_count}\` ${EMOJIS.rankX} \`${player.ss_count}\` ${EMOJIS.rankSH} \`${player.sh_count}\` ${EMOJIS.rankS} \`${player.s_count}\` ${EMOJIS.rankA} \`${player.a_count}\`
        `)
        .setFooter({ 
            text: displayLastSeen, 
            iconURL: displayLastSeenIcon
        });
}