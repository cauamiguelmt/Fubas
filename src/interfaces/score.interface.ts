import { BeatmapInterface, PlayerInterface } from "./interfaces.export";

export default interface ScoreInterface {
    id: number;
    score: number;
    starrating: number; // Depende da combinação de mods
    pp: number;
    maxPP: number;
    acc: number;
    maxCombo: number;
    mods: string; // NFV2, HDHR, etc
    n300: number;
    n100: number;
    n50: number;
    nMiss: number;
    date: Date;
    grade: string; // SS, S, A, etc
    perfect: boolean;
    beatmap: BeatmapInterface;
    player: PlayerInterface;
}