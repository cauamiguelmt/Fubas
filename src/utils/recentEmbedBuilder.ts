import { EmbedBuilder } from "discord.js"
import { IScore } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"
import { scoreGradeToEmoji, applyModsToStats, formatTime } from "./utils.export"

export default async function recentEmbedBuilder(score: IScore): Promise<EmbedBuilder> {

    const tab = "\u2003"
    const options = {
        maximumFractionDigits: 2
    }

    let bpm = score.beatmap.bpm
    let length = score.beatmap.length
    applyModsToStats(bpm, length, score.mods)
    // DEFINIR DEPOIS COMO VÃO SER CALCULADOS CS, AR, OD, HP DO SCORE:
    let cs, ar, od, hp // <---

    const scoreTopPlayRanking = score.player.top200.findIndex(s => s.id === score.id) + 1
    const showPersonalBest = scoreTopPlayRanking <= 200 ? `### __Personal Best #${scoreTopPlayRanking}__` : " "

    return new EmbedBuilder()
        .setAuthor({ 
            name: `${score.player.nickname}: ${score.player.pp}pp (#${score.player.rank})`, 
            iconURL: URLS.fubikaIcon,
            url: score.player.url
        })
        .setTitle(`${score.beatmap.title} [${score.beatmap.diff}] [${score.starrating.toLocaleString('en-US', options)}★]`)
        .setURL(score.beatmap.url)
        .setColor(COLORS.blue)
        .setThumbnail(score.beatmap.imgUrl)
        .setDescription(`
${showPersonalBest}
${scoreGradeToEmoji(score.grade)} **+${score.mods}${tab}${score.score.toLocaleString('en-US')}${tab}${score.acc.toLocaleString('en-US', options)}%**${tab}${score.timestamp}
**${score.pp.toLocaleString('en-US', options)}**/${score.maxPP.toLocaleString('en-US', options)}PP • **${score.maxCombo}x**/${score.beatmap.maxCombo}x • ${score.nMiss}${EMOJIS.miss}
\`${formatTime(length)}\` • \`${bpm}\` BPM • \`CS: ${cs} AR: ${ar} OD: ${od} HP: ${hp}\`
        `)
        .setFooter({ 
            text: `Mapset by ${score.beatmap.mapper} • ${score.beatmap.status}`,
        });
}