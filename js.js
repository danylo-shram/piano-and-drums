const pianoSounds = {
    'C': new Audio('c.wav'),
    'C#': new Audio('c#.wav'),
    'D': new Audio('d.wav'),
    'D#': new Audio('d#.wav'),
    'E': new Audio('e.wav'),
    'F': new Audio('f.wav'),
    'F#': new Audio('f#.wav'),
    'G': new Audio('g.wav'),
    'G#': new Audio('g#.wav'),
    'A': new Audio('a.wav'),
    'A#': new Audio('a#.wav'),
    'B': new Audio('b.wav')
};

const drumSounds = {
    'kick': new Audio('kick.wav'),
    'snare': new Audio('snare.wav'),
    'clap': new Audio('clap.wav'),
    'hat': new Audio('hat.wav')
};

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        if (pianoSounds[note]) {
            pianoSounds[note].currentTime = 0;
            pianoSounds[note].play();
        }
    });
});

document.querySelectorAll('.drum-key').forEach(key => {
    key.addEventListener('click', () => {
        const sound = key.getAttribute('data-sound');
        if (drumSounds[sound]) {
            drumSounds[sound].currentTime = 0;
            drumSounds[sound].play();
        }
    });
});

document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    if (pianoSounds[key]) {
        pianoSounds[key].currentTime = 0;
        pianoSounds[key].play();
    }
    if (drumSounds[key]) {
        drumSounds[key].currentTime = 0;
        drumSounds[key].play();
    }
});

