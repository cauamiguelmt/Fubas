import { EmbedBuilder, time, TimestampStyles } from "discord.js"
import { IScore } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"
import { scoreGradeToEmoji, applyModsToStats, formatTime } from "./utils.export"

export default async function recentEmbedBuilder(score: IScore): Promise<EmbedBuilder> {

    const tab = "\u2003"
    const options = {
        maximumFractionDigits: 2
    }

    let bpm = score.beatmap.bpm
        let length = score.beatmap.total_length
        applyModsToStats(bpm, length, score.mods)
        // DEFINIR DEPOIS COMO VÃO SER CALCULADOS CS, AR, OD, HP DO SCORE
        let cs, ar, od, hp // <---

    const scoreTopPlayRanking = score.player.top100.findIndex(s => s.id === score.id) + 1
    const showPersonalBest = scoreTopPlayRanking <= 200 ? `### __Personal Best #${scoreTopPlayRanking}__` : " "

    return new EmbedBuilder()
        .setAuthor({ 
            name: `${score.player.name}: ${score.player.pp}pp (#${score.player.rank})`, 
            iconURL: URLS.fubikaIcon,
            url: score.player.url
        })
        .setTitle(`${score.beatmap.title} [${score.beatmap.diff}] [${score.beatmap.star_rating.toLocaleString('en-US', options)}★]`)
        .setURL(score.beatmap.url)
        .setColor(COLORS.blue)
        .setThumbnail(score.beatmap.cover)
        .setDescription(`
${showPersonalBest}
${scoreGradeToEmoji(score.grade)} **+${score.mods}${tab}${score.score.toLocaleString('en-US')}${tab}${score.acc.toLocaleString('en-US', options)}%**${tab}${time(new Date(score.timestamp), TimestampStyles.RelativeTime)}
**${score.pp.toLocaleString('en-US', options)}PP** • **${score.max_combo}x**/${score.beatmap.max_combo}x • ${score.nmiss}${EMOJIS.miss}
\`${formatTime(length)}\` • \`${bpm}\` BPM • \`CS: ${cs} AR: ${ar} OD: ${od} HP: ${hp}\`
        `) // Mudar o campo do PP para **${score.pp.toLocaleString('en-US', options)}**/${score.maxPP.toLocaleString('en-US', options)}PP quando tiver maxPP no objeto score
        .setFooter({ 
            text: `Mapset by ${score.beatmap.author_name} • ${score.beatmap.status}`,
        });
}