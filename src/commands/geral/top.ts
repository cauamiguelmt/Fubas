import { SlashCommandBuilder, CommandInteraction, EmbedBuilder } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('top')
        .setDescription('Mostra o top200 do usuário'),

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

        // Simulação dos scores
        const scores = [
            { 
                number: 1, 
                title: "The Quick Brown Fox - The Big Black", 
                diff: "WHO'S AFRAID OF THE BIG BLACK", 
                stars: 10.71, 
                pp: 1923.19, 
                acc: 99.05, 
                combo: 1337,
                maxCombo: 1337,
                miss: 0,
                mods: "+DTHDHR", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiXH}`,
                mapUrl: "https://osu.ppy.sh/b/12345"
            },
            { 
                number: 2, 
                title: "World's End, Girl's Rondo", 
                diff: "We cry \"OPEN\"", 
                stars: 5.86, 
                pp: 271.18, 
                acc: 99.05, 
                combo: 2047,
                maxCombo: 2048,
                miss: 0,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/12345"
            },
            { 
                number: 3, 
                title: "Shinsou Shintouron", 
                diff: "Shawajoy's Lunatic", 
                stars: 5.82, 
                pp: 265.07, 
                acc: 98.15, 
                combo: 1569, 
                maxCombo: 1572,
                miss: 0,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/67890"
            },
            { 
                number: 4, 
                title: "Dark Flight Dreamer", 
                diff: "Shawajoy's Lunatic", 
                stars: 5.82, 
                pp: 259.91, 
                acc: 250.49, 
                combo: 1200, 
                maxCombo: 1202,
                miss: 0,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/759056"
            },
            { 
                number: 5, 
                title: "Sunglow", 
                diff: "Melody", 
                stars: 5.91, 
                pp: 250.49, 
                acc: 98.9, 
                combo: 1074, 
                maxCombo: 1721,
                miss: 1,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiA}`,
                mapUrl: "https://osu.ppy.sh/b/1258642"
            },
            { 
                number: 6, 
                title: " Caliburne \~Story of the Legendary Sword\~", 
                diff: "Extra", 
                stars: 6.06, 
                pp: 235.54, 
                acc: 98.1, 
                combo: 927, 
                maxCombo: 929,
                miss: 0,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/742975"
            },
            { 
                number: 7, 
                title: "Putin's Boner", 
                diff: "Ultimate Moe Lord", 
                stars: 6.27, 
                pp: 234.32, 
                acc: 98.6, 
                combo: 630, 
                maxCombo: 1463,
                miss: 4,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiA}`,
                mapUrl: "https://osu.ppy.sh/b/1556943"
            },
            { 
                number: 8, 
                title: "An - Saigo", 
                diff: "Another", 
                stars: 5.71, 
                pp: 231.54, 
                acc: 99.02, 
                combo: 1255, 
                maxCombo: 1230,
                miss: 0,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/1100090"
            },
            { 
                number: 9, 
                title: "Hana - Sakura no Uta", 
                diff: "Euphoria", 
                stars: 5.64, 
                pp: 229.21, 
                acc: 98.56, 
                combo: 1228, 
                maxCombo: 1230,
                miss: 0,
                mods: "HD", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/827488"
            },
            { 
                number: 10, 
                title: "Clarity", 
                diff: "Extra", 
                stars: 5.91, 
                pp: 265.07, 
                acc: 98.15, 
                combo: 1569, 
                maxCombo: 1572,
                miss: 4,
                mods: "", 
                timeAgo: "<t:1766019600:R>", 
                rank: `${emojiS}`,
                mapUrl: "https://osu.ppy.sh/b/67890"
            },
        ];

        // Lógica de formatação dos scores
        const scoresDescription = scores.map(score => {
            const showMiss = score.miss > 0 ? `${score.miss}${miss}` : '';
            // Linha 1: #Numero Título [Diff] [Stars★]
            const line1 = `**#${score.number}** **[${score.title} [${score.diff}]](${score.mapUrl})** [${score.stars}★]`;
            // Linha 2: Rank PP (Acc) [Combo] Miss Mods Tempo 
            const line2 = `${score.rank} **${score.pp}pp** (${score.acc}%) [**${score.combo}x**/${score.maxCombo}x] ${showMiss} **${score.mods} ** ${score.timeAgo}`;
            // Junta as duas linhas
            return `${line1}\n${line2}`;
        }).join('\n'); // Junta todos os scores

        const embed = new EmbedBuilder()
        .setAuthor({ 
            name: 'Loopyng: 4,863.27pp (#1)', 
            iconURL: 'https://iili.io/fcDwBEJ.png', // URL do Fubas.png
            url: 'https://osu.ppy.sh/users/loopyng' // Link para o perfil do usuário
        })
        .setColor("#436990") // Azul Escuro
        .setThumbnail('https://iili.io/fcihcyG.jpg') // URL da foto do usuário
        .setDescription(scoresDescription)
        .setFooter({ 
            text: 'Page 1/20 • Mode: osu!',
        });
        
        interaction.reply({
            embeds: [embed]
        })
    }
}