import { IScore } from "./interfaces.export"

export default interface IPlayer {
    id: number
    nickname: string
    url: string
    avatarUrl: string
    rank: number
    pp: number
    acc: number
    playcount: number
    playtime: number
    level: number
    ranks: {
        XH: number
        X: number
        SH: number
        S: number
        A: number
    }
    lastSeen: string
    top200: Omit<IScore, 'player'>[] // <--- Substituir por top200?: Omit<IScore, 'player'>[] e corrigir o codigo
}