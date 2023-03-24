interface Player {
    currentSong: string;
    currentSongLength: number;
    playNext(): void;
    playPrevious(): void;
}

const player: Player = {
    currentSong: "Believer",
    currentSongLength: 35_000,
    playNext: () => console.log('Playing Next'),
    playPrevious: () => console.log('Playing Previous'),
}

type song = { name: string; length: number }

class AudioPlayer implements Player {
    currentSong: string;
    currentSongLength: number;

    constructor(songInfo: song) {
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }

    playNext = () => console.log('Playing Next');
    playPrevious = () => console.log('Playing Previous');

    stopAudio = () => {};
}

const audioPlayer = new AudioPlayer({name: 'shape of you', length: 40_000});
const anotherAudioPlayer = new AudioPlayer({name: 'closer', length: 50_000});

console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);