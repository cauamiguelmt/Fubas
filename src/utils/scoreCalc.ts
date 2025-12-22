export function applyModsToStats(bpm: number, lengthSeconds: number, mods: string) {
    let speedMultiplier = 1

    if (mods.includes('DT') || mods.includes('NC')) {
        speedMultiplier = 1.5
    } else if (mods.includes('HT')) {
        speedMultiplier = 0.75
    }

    return {
        bpm: Math.round(bpm * speedMultiplier),
        length: Math.round(lengthSeconds / speedMultiplier)
    };
}

export function formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600)
    const min = Math.floor((seconds % 3600) / 60)
    const sec = seconds % 60

    const pad = (num: number): string => num.toString().padStart(2, '0')

    if (hrs > 0) {
        return `${pad(hrs)}:${pad(min)}:${pad(sec)}`
    }

    return `${pad(min)}:${pad(sec)}`
}