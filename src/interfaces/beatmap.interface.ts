import { IScore } from "./interfaces.export"

export default interface IBeatmap {
    id: number
    collectionId: number
    url: string
    imgUrl: string
    title: string
    diff: string
    mode: string
    starrating: number
    maxCombo: number
    length: number // em segundos
    bpm: number
    cs: number
    ar: number
    od: number
    hp: number
    mapper: string
    status: string // Ranked, Loved, etc
    scores?: Omit<IScore, 'beatmap'>[]
}