import { IBeatmap, IPlayer } from "./interfaces.export";

export default interface IScore {
    id: number
    score: number
    starrating: number // Depende da combinação de mods
    pp: number
    maxPP: number
    acc: number
    maxCombo: number
    mods: string // NFV2, HDHR, etc
    n300: number
    n100: number
    n50: number
    nMiss: number
    date: Date
    timestamp: string
    grade: string // SS, S, A, etc
    perfect: boolean
    beatmap: IBeatmap // <--- Substituir por beatmap?: IBeatmap e corrigir o código
    player: IPlayer // <--- Substituir por player?: IPlayer e corrigir o código
}