import { EMOJIS } from "../constants"

const gradeMap: Record<string, string> = {
    'XH': EMOJIS.rankXH,
    'X':  EMOJIS.rankX,
    'SH': EMOJIS.rankSH,
    'S':  EMOJIS.rankS,
    'A':  EMOJIS.rankA,
    'B':  EMOJIS.rankB,
    'C':  EMOJIS.rankC,
    'D':  EMOJIS.rankD,
    'F':  EMOJIS.rankF
}

export default function scoreGradeToEmoji(scoreGrade: string): string {
    return gradeMap[scoreGrade] ?? '';
}
