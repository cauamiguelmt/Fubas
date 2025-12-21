import { ScoreInterface } from "./interfaces.export";

export default interface BeatmapInterface {
    id: number;
    collectionId: number;
    url: string;
    imgUrl: string;
    title: string;
    diff: string;
    mode: string;
    starrating: number;
    // beatmapUrl: string;
    // beatmapImgUrl: string;
    maxCombo: number;
    length: number; // em segundos
    bpm: number;
    cs: number;
    ar: number;
    od: number;
    hp: number;
    mapper: string;
    status: string; // Ranked, Loved, etc
    Scores: Array<ScoreInterface>
}