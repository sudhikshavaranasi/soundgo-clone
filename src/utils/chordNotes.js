const CHROMATIC_NOTES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
]

const CHORD_INTERVALS = {
    "Major" : [0,4,7],
    "Minor" :[0,3,7],
    "Maj7" : [0,4,7,11],
    "7" : [0,4,7,10],
    "m7" : [0,3,7,10],
    "sus4" : [0,5,7],
    "dim" : [0,3,6],
    "aug" : [0,4,8]
}

export function getChordNotes(rootNote, chordType) {
    const rootIndex = CHROMATIC_NOTES.indexOf(rootNote);
    const notes = intervals.map(interval => {
        const noteIndex = (rootIndex + interval)%12;
        return CHROMATIC_NOTES[noteIndex];
    });
}