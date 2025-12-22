import { SlashCommandBuilder, CommandInteraction, time, TimestampStyles } from "discord.js"
import { IPlayer } from "../../interfaces/interfaces.export"
import { userEmbedBuilder } from "../../utils/utils.export"

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Mostra um perfil de osu! no Fubika'),

    async execute(interaction: CommandInteraction) {
        
        // --- Simulação de perfil do usuário ---
        const Loopyng: IPlayer = {
            id: 1,
            nickname: "Loopyng",
            url: "https://osu.ppy.sh/users/loopyng",
            avatarUrl: "https://iili.io/fcihcyG.jpg",
            rank: 1,
            pp: 4863.27,
            acc: 97.98,
            level: 100,
            playcount: 27077,
            playtime: 520,
            ranks: {
                XH: 2,
                X: 5,
                SH: 49,
                S: 148,
                A: 604
            },
            lastSeen: "3 days",
            top200: [
                {
                    id: 1,
                    score: 150343,
                    starrating: 4.11399,
                    pp: 14.776,
                    maxPP: 118.04912,
                    acc: 77.61276,
                    maxCombo: 150,
                    mods: "NFV2",
                    n300: 208,
                    n100: 77,
                    n50: 9,
                    nMiss: 9,
                    date: new Date(2025, 12, 20),
                    timestamp: time(new Date(2025, 12, 20), TimestampStyles.RelativeTime),
                    grade: 'C',
                    perfect: false,
                    beatmap: {
                        id: 1442773,
                        collectionId: 682290,
                        url: "https://osu.ppy.sh/beatmapsets/682290#osu/1442773",
                        imgUrl: "https://assets.ppy.sh/beatmaps/682290/covers/cover.jpg?1645786406",
                        title: "Miracle Sugite Yabai (feat. shully)",
                        diff: "Insane",
                        mode: "osu",
                        starrating: 4.11399,
                        maxCombo: 434,
                        length: 88,
                        bpm: 145,
                        cs: 4,
                        ar: 8.5,
                        od: 8,
                        hp: 6,
                        mapper: "Milan-",
                        status: "ranked"
                    }
                }
            ]
        }

        const embed = await userEmbedBuilder(Loopyng)        
        
        await interaction.reply({
            embeds: [embed]
        })
    }
}