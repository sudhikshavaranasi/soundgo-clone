import * as Tone from "tone";

const reverb = new Tone.Reverb({
    decay: 3,
    wet: 0.35,
}).toDestination();

const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
        type: "triangle",
    },
    envelope: {
        attack: 0.08,
        decay: 0.15,
        sustain: 0.4,
        release: 1.2,
    },
}).connect(reverb);

export async function startAudio() {
    await Tone.start();
}

export function playNote(note) {
    synth.triggerAttackRelease(note, "8n");
}

export function playChord(notes){
    synth.triggerAttackRelease(notes, "8n");
}