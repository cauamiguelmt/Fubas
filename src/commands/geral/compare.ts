import { SlashCommandBuilder, CommandInteraction, EmbedBuilder, time, TimestampStyles } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName('compare')
        .setDescription('Compara um score em um beatmap'),

    async execute(interaction: CommandInteraction) {
        
        // --- Simulação de score ---
        // 1. Informações do usuário
        const username = "Loopyng";
        const userPP = "4,863.27";
        const userRank = 1;
        const userUrl = "https://osu.ppy.sh/users/loopyng";
        
        // 2. Informções do score
        // 2.1. Relacionadas ao beatmap
        const mapTitle = "The Quick Brown Fox - The Big Black";
        const mapDiff = "WHO'S AFRAID OF THE BIG BLACK";
        const mapStars = 10.71;
        const mapUrl = "https://osu.ppy.sh/beatmapsets/41823#osu/131891";
        const mapImgUrl = "https://assets.ppy.sh/beatmaps/41823/covers/fullsize.jpg";
        const mapLength = "1:14";
        const mapBPM = 540.45;
        const mapCS = 5.2;
        const mapAR = 11;
        const mapOD = 10.98;
        const mapHP = 7;
        const mapMapper = "Blue Dragon";
        const mapRankedStatus = "Ranked";

        // 2.2. Relacionadas ao score
        const scoreTopPlayRanking = 1;
        const scoreMods = "DTHDHRV2";
        const scoreValue = "1,780,800";
        const scoreAcc = 100;
        const scoreDate = new Date('2025-12-18T01:00:00Z');
        const scoreRelativeTime = time(scoreDate, TimestampStyles.RelativeTime);
        const scorePp = 1923.19;
        const scoreMaxPp = 1923.19;
        const scoreCombo = 1337;
        const scoreMaxCombo = 1337;
        const scoreMisses = 0;
        // ---------------------
        
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
        const tab = "\u2003";

        const showPersonalBest = scoreTopPlayRanking <= 200 ? `### __Personal Best #${scoreTopPlayRanking}__` : "";

        const embed = new EmbedBuilder()
        .setAuthor({ 
            name: `${username}: ${userPP}pp (#${userRank})`, 
            iconURL: 'https://iili.io/fcDwBEJ.png', // URL do Fubas.png
            url: userUrl
        })
        .setTitle(`${mapTitle} [${mapDiff}] [${mapStars}★]`)
        .setURL(mapUrl)
        .setColor("#4189D3") // Azul
        .setThumbnail(mapImgUrl)
        .setDescription(`
${showPersonalBest}
${emojiXH} **+${scoreMods}${tab}${scoreValue}${tab}${scoreAcc}%**${tab}${scoreRelativeTime}
**${scorePp}**/${scoreMaxPp}PP • **${scoreCombo}x**/${scoreMaxCombo}x • ${scoreMisses}${miss}
\`${mapLength}\` • \`${mapBPM}\` BPM • \`CS: ${mapCS} AR: ${mapAR} OD: ${mapOD} HP: ${mapHP}\`
        `)
        .setFooter({ 
            text: `Mapset by ${mapMapper} • ${mapRankedStatus}`,
        });
        
        interaction.reply({
            embeds: [embed]
        })
    }
}