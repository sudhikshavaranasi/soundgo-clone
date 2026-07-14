import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

export async function startAudio() {
    await Tone.start();
}

export function playNote(note) {
    synth.triggerAttackRelease(note, "8n");
}
