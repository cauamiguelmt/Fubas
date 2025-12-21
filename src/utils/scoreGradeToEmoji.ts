import { EMOJIS } from "../constants"

export default async function scoreGradeToEmoji(scoreGrade: string): Promise<string> {
    
    switch (scoreGrade) {
        case 'XH':
            return EMOJIS.rankXH;
        case 'X':
            return EMOJIS.rankX;
        case 'SH':
            return EMOJIS.rankSH;
        case 'S':
            return EMOJIS.rankS;
        case 'A':
            return EMOJIS.rankA;
        case 'B':
            return EMOJIS.rankB;
        case 'C':
            return EMOJIS.rankC;
        case 'D':
            return EMOJIS.rankD;
        case 'F':
            return EMOJIS.rankF;
        default:
            return '';
    }
}