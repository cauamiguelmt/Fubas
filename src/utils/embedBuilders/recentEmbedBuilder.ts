import { EmbedBuilder, time, TimestampStyles } from "discord.js"
import { IPlayer, IScore } from "../../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../../constants"
import { scoreGradeToEmoji, applyModsToStats, formatTime, capitalizeFirstLetter } from "../utils.export"

export default async function recentEmbedBuilder(player: IPlayer, score: IScore): Promise<EmbedBuilder> {

    if (!score.beatmap)
        throw new Error("Beatmap data is missing");

    const tab = "\u2003"
    const options = {
        maximumFractionDigits: 2
    }

    const { bpm, length } = applyModsToStats(score.beatmap.bpm, score.beatmap.total_length, score.mods)
    // DEFINIR DEPOIS COMO VÃO SER CALCULADOS CS, AR, OD, HP DO SCORE

    const scoreTopPlayRanking = (player.top_200?.findIndex(s => s.id === score.id) ?? -1) + 1
    const displayPersonalBest = scoreTopPlayRanking <= 200 && score.grade != 'F' ? `### __Personal Best #${scoreTopPlayRanking}__` : ''
    const displayMods = score.mods === '' ? '' : `+${score.mods}`

    return new EmbedBuilder()
        .setAuthor({ 
            name: `${player.name}: ${player.pp.toLocaleString('en-US', options)}pp (#${player.rank})`, 
            iconURL: URLS.fubikaIcon,
            url: player.url
        }) //                                           Mudar --->  beatmap.star_rating.toLocaleString('en-US', options)}
        .setTitle(`${score.beatmap.title} [${score.beatmap.diff}] [${score.beatmap.star_rating.toLocaleString('en-US', options)}★]`)
        .setURL(score.beatmap.url)
        .setColor(COLORS.blue)
        .setThumbnail(score.beatmap.cover)
        .setDescription(`
${displayPersonalBest}
${scoreGradeToEmoji(score.grade)} **${displayMods}${tab}${score.score.toLocaleString('en-US')}${tab}${score.acc.toLocaleString('en-US', options)}%**${tab}${time(new Date(score.play_time), TimestampStyles.RelativeTime)}
**${score.pp.toLocaleString('en-US', options)}PP** • **${score.max_combo}x**/${score.beatmap.max_combo}x • ${score.nmiss}${EMOJIS.miss}
\`${formatTime(length)}\` • \`${bpm}\` BPM • \`CS: ${score.beatmap.cs} AR: ${score.beatmap.ar} OD: ${score.beatmap.od} HP: ${score.beatmap.hp}\`
        `) // Mudar o campo do PP para **${score.pp.toLocaleString('en-US', options)}**/${score.maxPP.toLocaleString('en-US', options)}PP quando tiver maxPP no objeto score
        .setFooter({ 
            text: `Mapset by ${score.beatmap.author_name} • ${capitalizeFirstLetter(score.beatmap.status)}`,
        });
}