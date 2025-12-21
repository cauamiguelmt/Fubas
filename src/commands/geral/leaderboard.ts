import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from "discord.js"
import embedPagination from "../../utils/embedPagination";

export default {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Mostra a leaderboard de um beatmap'),

    async execute(interaction: CommandInteraction) {
        
        // Emojis de rank
        const emojiXH = "<:rankingXHsmall2x:1451026695569281146>";
        const emojiX = "<:rankingXsmall2x:1451026724513906698>"; 
        const emojiSH = "<:rankingSHsmall2x:1451026620310753382>";
        const emojiS = "<:rankingSsmall2x:1451026644579127476>"; 
        const emojiA = "<:rankingAsmall2x:1451026496968986795>";
        const emojiB = "<:rankingBsmall2x:1451026536512753727>";
        const emojiC = "<:rankingCsmall2x:1451026570037956698>";
        const emojiD = "<:rankingDsmall2x:1451026596986355803>";

        const miss = "<:miss:1451028123553497281>";

        // --- Simulação do mapa e scores ---
        const mapTitle = "The Quick Brown Fox - The Big Black";
        const mapDiff = "WHO'S AFRAID OF THE BIG BLACK";
        const mapStars = 6.86;
        const mapUrl = "https://osu.ppy.sh/b/131891";
        const mapImgUrl = "https://assets.ppy.sh/beatmaps/41823/covers/fullsize.jpg";

        const scores = [
            { 
                number: 1, 
                user: "Loopyng", 
                userUrl: "https://osu.ppy.sh/users/loopyng",
                score: "1,780,800",
                combo: 1337,
                maxCombo: 1337,
                mods: "DTHDHRV2", 
                pp: 1923.19, 
                maxPp: 1923.19, 
                acc: 100,
                miss: 0,
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiXH}`,
            },
            { 
                number: 2, 
                user: "oregue", 
                userUrl: "https://osu.ppy.sh/users/oregue",
                score: "476,886",
                combo: 153,
                maxCombo: 1337,
                mods: "V2", 
                pp: 129.75, 
                maxPp: 358.84, 
                acc: 94.37, 
                miss: 12,
                timeAgo: "<t:1724989680:R>", 
                rank: `${emojiA}`,
            },
            { 
                number: 3, 
                user: "Iucany", 
                userUrl: "https://osu.ppy.sh/users/Iucany",
                score: "410,252",
                combo: 197,
                maxCombo: 1337,
                mods: "HDV2", 
                pp: 101.18, 
                maxPp: 387.55, 
                acc: 89.68, 
                miss: 26,
                timeAgo: "<t:1682046000:R>", 
                rank: `${emojiB}`,
            },
            { 
                number: 4, 
                user: "otavi0", 
                userUrl: "https://osu.ppy.sh/users/otavi0",
                score: "403,982",
                combo: 268,
                maxCombo: 1337,
                mods: "V2", 
                pp: 97.54, 
                maxPp: 358.84, 
                acc: 91.06, 
                miss: 13,
                timeAgo: "<t:1758510000:R>", 
                rank: `${emojiA}`,
            },
            { 
                number: 5, 
                user: "zStormk19", 
                userUrl: "https://osu.ppy.sh/users/zStormk19",
                score: "397,463",
                combo: 256,
                maxCombo: 1337,
                mods: "V2", 
                pp: 79.48, 
                maxPp: 358.84, 
                acc: 89.16, 
                miss: 18,
                timeAgo: "<t:1653793200:R>", 
                rank: `${emojiB}`,
            },
            { 
                number: 6, 
                user: "DUM4L77", 
                userUrl: "https://osu.ppy.sh/users/DUM4L77",
                score: "387,433",
                combo: 200,
                maxCombo: 1337,
                mods: "V2", 
                pp: 96.04, 
                maxPp: 358.84, 
                acc: 89.7, 
                miss: 13,
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiB}`,
            },
            { 
                number: 7, 
                user: "Hypervisk", 
                userUrl: "https://osu.ppy.sh/users/Hypervisk",
                score: "377,679",
                combo: 192,
                maxCombo: 1337,
                mods: "V2",
                pp: 86.29,
                maxPp: 358.84,
                acc: 90.8,
                miss: 12,
                timeAgo: "<t:1760238000:R>",
                rank: `${emojiA}`,
            },
            { 
                number: 8, 
                user: "AlemaoG", 
                userUrl: "https://osu.ppy.sh/users/AlemaoG",
                score: "359,048",
                combo: 309,
                maxCombo: 1337,
                mods: "V2",
                pp: 71.92,
                maxPp: 358.84,
                acc: 87.67, 
                miss: 29,
                timeAgo: "<t:1756350000:R>",
                rank: `${emojiB}`,
            },
            { 
                number: 9, 
                user: "KitBengala", 
                userUrl: "https://osu.ppy.sh/users/KitBengala",
                score: "339,922",
                combo: 148,
                maxCombo: 1337,
                mods: "V2",
                pp: 70.68,
                maxPp: 358.84,
                acc: 87.71,
                miss: 29,
                timeAgo: "<t:1750561200:R>",
                rank: `${emojiB}`,
            },
            { 
                number: 10, 
                user: "-iccy", 
                userUrl: "https://osu.ppy.sh/users/-iccy",
                score: "200,000",
                combo: 102,
                maxCombo: 1337,
                mods: "V2", 
                pp: 48.92, 
                maxPp: 358.84, 
                acc: 81.25, 
                miss: 48,
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiC}`,
            },
            { 
                number: 11, 
                user: "Paidasputas", 
                userUrl: "https://osu.ppy.sh/users/paidasputas",
                score: "0",
                combo: 0,
                maxCombo: 1337,
                mods: "NFV2", 
                pp: 0, 
                maxPp: 358.84, 
                acc: 0, 
                miss: 746,
                timeAgo: "<t:-61346667180:R>", 
                rank: `${emojiD}`,
            },
        ];
        // ---------------------

        const scoresPerPage = 10;
        const embeds: EmbedBuilder[] = [];

        for (let i = 0; i < scores.length; i += scoresPerPage) {

            const currentScoresChunk = scores.slice(i, i + scoresPerPage);

            // Lógica de formatação dos scores
            const description = currentScoresChunk.map(score => {
                const showMiss = score.miss > 0 ? `${score.miss}${miss}` : '';
                // Linha 1: #Número Usuário: Score [Combo] Mods
                const line1 = `**#${score.number}** **[${score.user}](${score.userUrl})** ${score.score} [**${score.combo}x**/${score.maxCombo}x] **+${score.mods} **`;
                // Linha 2: Rank PP/maxPP • Acc • Miss Tempo 
                const line2 = `${score.rank} **${score.pp}pp**/${score.maxPp}PP • ${score.acc}% • ${showMiss}${score.timeAgo}`;
                // Junta as duas linhas
                return `${line1}\n${line2}`;
            }).join('\n'); // Junta todos os scores
            
            const embed = new EmbedBuilder()
            .setAuthor({ 
                name: `${mapTitle} [${mapDiff}] [${mapStars}★]`, 
                iconURL: 'https://iili.io/fcDwBEJ.png', // URL do Fubas.png
                url: mapUrl
            })
            .setColor("#4189D3") // Azul
            .setThumbnail(mapImgUrl)
            .setDescription(description)
            .setFooter({ 
                text: `Page ${Math.floor(i / scoresPerPage) + 1}/${Math.ceil(scores.length / scoresPerPage)} • Mode: osu!`,
            });
            
            embeds.push(embed); // Adiciona à lista de embeds
        }
        
        await embedPagination(interaction, embeds, "", false, 60000);
    }
} 