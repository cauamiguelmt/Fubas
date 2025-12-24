import { EmbedBuilder } from "discord.js"
import { IPlayer } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"

export default async function userEmbedBuilder(player: IPlayer): Promise<EmbedBuilder> {

    const options = {
        maximumFractionDigits: 2 
    };

    const displayLastActivity = player.last_activity === "Online" ? "Online on osu! Fubika" : `Última vez visto ${player.last_activity} no Fubika`
    const displayLastActivityIcon = player.last_activity === "Online" ? URLS.greenDot  : URLS.redDot
    const displayPlaytime = player.playtime < 3600 ? `${Math.round(player.playtime / 60)} mins` : `${Math.round(player.playtime / 3600)} hrs`

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
• **Level:** \`${player.level.toLocaleString('en-US', options)}%\`
• **Playcount:** \`${player.playcount.toLocaleString('en-US')}\` (\`${displayPlaytime}\`)
•  ${EMOJIS.rankXH} \`${player.ssh_count}\` ${EMOJIS.rankX} \`${player.ss_count}\` ${EMOJIS.rankSH} \`${player.sh_count}\` ${EMOJIS.rankS} \`${player.s_count}\` ${EMOJIS.rankA} \`${player.a_count}\`
        `)
        .setFooter({ 
            text: displayLastActivity, 
            iconURL: displayLastActivityIcon
        });
}