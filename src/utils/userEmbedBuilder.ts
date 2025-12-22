import { EmbedBuilder } from "discord.js"
import { IPlayer } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"

export default async function userEmbedBuilder(player: IPlayer): Promise<EmbedBuilder> {

    const options = {
        maximumFractionDigits: 2 
    };

    const displayLastSeen = player.lastSeen === "Online" ? "Online on osu! Fubika" : `Last Seen ${player.lastSeen} Ago on osu`
    const displayLastSeenIcon = player.lastSeen === "Online" ? URLS.greenDot  : URLS.redDot

    return new EmbedBuilder()
        .setAuthor({ 
            name: `osu! Standard Profile for ${player.nickname}`, 
            iconURL: URLS.fubikaIcon,
            url: player.url
        })
        .setColor(COLORS.blue)
        .setThumbnail(player.avatarUrl)
        .setDescription(`
• **Fubika Rank:** \`#${player.rank}\`
• **PP:** \`${player.pp.toLocaleString('en-US', options)}\` • **Acc:** \`${player.acc.toLocaleString('en-US', options)}%\`
• **Level:** \`${player.level}%\`
• **Playcount:** \`${player.playcount.toLocaleString('en-US')}\` (\`${player.playtime} hrs\`)
•  ${EMOJIS.rankXH} \`${player.ranks.XH}\` ${EMOJIS.rankX} \`${player.ranks.X}\` ${EMOJIS.rankSH} \`${player.ranks.SH}\` ${EMOJIS.rankS} \`${player.ranks.S}\` ${EMOJIS.rankA} \`${player.ranks.A}\`
        `)
        .setFooter({ 
            text: displayLastSeen, 
            iconURL: displayLastSeenIcon
        });
}