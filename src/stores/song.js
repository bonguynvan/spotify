
import { defineStore } from 'pinia'
import artist from '../artist.json'
export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null
  }),
  actions: {
    loadSong(artist, track) {
      this.currentArtist = artist
      this.currentTrack = track

      if (this.audio && this.audio.src) {
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = track.path

      setTimeout(() => {
        this.isPlaying = true
        this.audio.play()
      }, 200)
    },
    playOrPause() {
      if (this.audio.paused) {
        this.isPlaying = true
        this.audio.play()
      } else {
        this.isPlaying = false
        this.audio.pause()
      }
    },
    playOrPauseThisSong(artist, track) {
      if (!this.audio || !this.audio.src || this.currentTrack.id != track.id) {
        this.loadSong(artist, track)
        return
      }
      this.playOrPause()
    },
    prevSong(currentTrack) {
      let track = artist.tracks[currentTrack.id - 2]
      this.loadSong(artist, track)
    },
    nextSong(currentTrack) {
      if (currentTrack.id == artist.tracks.length) {
        this.loadSong(artist, artist.tracks[0])
      } else {
        this.loadSong(artist, artist.tracks[currentTrack.id])
      }
    },
    playFromFirst(){
      this.resetState()
      this.loadSong(artist, artist.tracks[0])
    },
    resetState() {
      this.isPlaying = false
      this.audio = null
      this.currentArtist = null
      this.currentTrack = null
    }
  },
  persist: true
})
