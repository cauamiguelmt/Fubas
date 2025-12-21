import { ScoreInterface } from "./interfaces.export";

export default interface PlayerInterface {
    id: number;
    nickname: string;
    url: string;
    avatarUrl: string;
    rank: number;
    pp: number;
    acc: number;
    playcount: number;
    playtime: number;
    level: number;
    ranks: {
        XH: number;
        X: number;
        SH: number;
        S: number;
        A: number;
    }
    lastSeen: string;
    top200: Array<ScoreInterface>;
}