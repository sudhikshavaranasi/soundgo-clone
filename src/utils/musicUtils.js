const NOTES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
];

export function getNoteFromX(x) {

    const mirroredX = 1 - x;

    const index = Math.min(
        6,
        Math.floor(mirroredX * 7)
    );

    return NOTES[index];
}