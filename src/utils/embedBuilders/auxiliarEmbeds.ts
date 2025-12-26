import { EmbedBuilder, AttachmentBuilder } from "discord.js";
import { IPlayer } from "../../interfaces/interfaces.export";
import { URLS, COLORS } from "../../constants";

export async function defaultEmbedBuilder(description: string): Promise<EmbedBuilder> {

    return new EmbedBuilder()
        .setColor(COLORS.blue)
        .setDescription(description)
        .setFooter({ 
            text: 'osu! Fubika Server',
            iconURL: URLS.fubikaIcon
        });
}

export async function noRecentScoresEmbedBuilder(player: IPlayer): Promise<{ embed: EmbedBuilder, attachment: AttachmentBuilder }> {
    
    const avatarAttachment = new AttachmentBuilder(player.pfp, { name: 'profile.png' })

    const embed = new EmbedBuilder()
        .setAuthor({ 
            name: `${player.name}: ${player.pp.toLocaleString('en-US')}pp (#${player.rank})`, 
            iconURL: URLS.fubikaIcon,
            url: player.url
        })
        .setColor(COLORS.blue)
        .setThumbnail('attachment://profile.png')
        .setDescription('Este player ainda não possui scores!')

    return { embed, attachment: avatarAttachment }
}