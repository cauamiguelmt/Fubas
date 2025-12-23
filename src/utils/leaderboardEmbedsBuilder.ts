import { EmbedBuilder } from "discord.js"
import { IBeatmap } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"
import { scoreGradeToEmoji } from "./utils.export"

export default async function leaderboardEmbedsBuilder(beatmap: IBeatmap): Promise<Array<EmbedBuilder>>{
    
    const options = {
        maximumFractionDigits: 2
    }

    const embeds: EmbedBuilder[] = []
    const scoresPerPage = 10

    if (!beatmap.scores || beatmap.scores.length === 0) { // <--- Elaborar
        return embeds
    }

    for (let i = 0; i < beatmap.scores.length; i += scoresPerPage) {

            const currentScoresChunk = beatmap.scores.slice(i, i + scoresPerPage)

            // Lógica de formatação dos scores
            const description = currentScoresChunk.map((score, index) => {
                const position = index + 1; // Posição do score
                const showMiss = score.nmiss > 0 ? `${score.nmiss}${EMOJIS.miss}` : ''
                // Linha 1: #Número Usuário: Score [Combo] Mods
                const line1 = `**#${position}** **[${score.player.name}](${score.player.url})** ${score.score} [**${score.max_combo}x**/${beatmap.max_combo}x] **+${score.mods} **`
                // Linha 2: Rank PP/maxPP • Acc • Miss Tempo 
                const line2 = `${scoreGradeToEmoji(score.grade)} **${score.pp.toLocaleString('en-US', options)}pp** • ${score.acc.toLocaleString('en-US', options)}% • ${showMiss}${score.timestamp}`
                // Junta as duas linhas
                return `${line1}\n${line2}`
            }).join('\n'); // Junta todos os scores
            
            const embed = new EmbedBuilder()
            .setAuthor({ 
                name: `${beatmap.title} [${beatmap.diff}] [${beatmap.star_rating}★]`,
                iconURL: URLS.fubikaIcon,
                url: beatmap.url
            })
            .setColor(COLORS.blue)
            .setThumbnail(beatmap.cover)
            .setDescription(description)
            .setFooter({ 
                text: `Page ${Math.floor(i / scoresPerPage) + 1}/${Math.ceil(beatmap.scores.length / scoresPerPage)} • Mode: osu!`,
            });
            
            embeds.push(embed); // Adiciona à lista de embeds
        }

    return embeds
}