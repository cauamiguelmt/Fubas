import { IScore } from "./interfaces.export"

export default interface IPlayer {
    id: number
    name: string
    url: string
    pfp: string
    rank: number
    pp: number
    acc: number
    // playcount: number
    playtime: number
    // level: number
    ssh_count: number
    ss_count: number
    sh_count: number
    s_count: number
    a_count: number
    // lastSeen: string
    top100: Omit<IScore, 'player'>[] // <--- Substituir por top200?: Omit<IScore, 'player'>[] e corrigir o codigo
}