import { EmbedBuilder } from "discord.js"
import { IPlayer } from "../interfaces/interfaces.export"
import { URLS, EMOJIS, COLORS } from "../constants"
import { scoreGradeToEmoji } from "./utils.export"

export default async function topEmbedsBuilder(player: IPlayer): Promise<Array<EmbedBuilder>>{
    
    const options = {
        maximumFractionDigits: 2
    }

    const embeds: EmbedBuilder[] = []
    const scoresPerPage = 10

    for (let i = 0; i < player.top200.length; i += scoresPerPage) {

            const currentScoresChunk = player.top200.slice(i, i + scoresPerPage)

            // Lógica de formatação dos scores
            const description = currentScoresChunk.map((score, index) => {
                const position = index + 1; // Posição do score
                const showMiss = score.nMiss > 0 ? `${score.nMiss}${EMOJIS.miss}` : ''
                // Linha 1: #Número Título [Diff] [Stars★]
                const line1 = `**#${position}** **[${score.beatmap.title} [${score.beatmap.diff}]](${score.beatmap.url})** [${score.starrating.toLocaleString('en-US', options)}★]`
                // Linha 2: Rank PP (Acc) [Combo] Miss Mods Tempo 
                const line2 = `${scoreGradeToEmoji(score.grade)} **${score.pp.toLocaleString('en-US', options)}pp** (${score.acc.toLocaleString('en-US', options)}%) [**${score.maxCombo}x**/${score.beatmap.maxCombo}x] ${showMiss}**${score.mods} ** ${score.timestamp}`
                // Junta as duas linhas
                return `${line1}\n${line2}`
            }).join('\n') // Junta todos os scores
            
            const embed = new EmbedBuilder()
            .setAuthor({ 
                name: `${player.nickname}: ${player.pp}pp (#${player.rank})`, 
                iconURL: URLS.fubikaIcon,
                url: player.url
            })
            .setColor(COLORS.blue)
            .setThumbnail(player.avatarUrl)
            .setDescription(description)
            .setFooter({ 
                text: `Page ${Math.floor(i / scoresPerPage) + 1}/${Math.ceil(player.top200.length / scoresPerPage)} • Mode: osu!`,
            });

            embeds.push(embed) // Adiciona à lista de embeds
        }

    return embeds
}