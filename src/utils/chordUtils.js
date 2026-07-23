const CHORDS = [
    "Major",
    "Minor",
    "7",
    "sus4",
    "m",
    "m7",
    "dim",
    "aug"

]


export function getChordFromAngle(angle) {
    const index = Math.floor(angle/45);
    return CHORDS[index];
}