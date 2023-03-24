var player = {
    currentSong: "Believer",
    currentSongLength: 35000,
    playNext: function () { return console.log('Playing Next'); },
    playPrevious: function () { return console.log('Playing Previous'); },
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log('Playing Next'); };
        this.playPrevious = function () { return console.log('Playing Previous'); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({ name: 'shape of you', length: 40000 });
var anotherAudioPlayer = new AudioPlayer({ name: 'closer', length: 50000 });
console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);
