<template>
<!-- audio player-->
<div class="audio green-audio-player">
  <div class="play-pause-btn" style="display: block;" @click="playpauseSound">
<i :class="playPause"></i>
  </div>

  <div class="controls">
    <span class="current-time">{{ audiotime }}</span>
    <div class="slider" data-direction="horizontal">
      <div class="progress">
        <div class="pin" id="progress-pin" data-method="rewind"></div>
      </div>
    </div>
    <span class="total-time">{{ audioDuration }}</span>
   <!-- <input type="number" v-model.number="time">-->
  </div>
  <div class="volume">
    <div class="volume-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" id="speaker"></path>
      </svg>
    </div>
    <div class="volume-controls hidden">
      <div class="slider" data-direction="vertical">
        <div class="progress">
          <div class="pin" id="volume-pin" data-method="changeVolume"></div>
        </div>
      </div>
    </div>
  </div>
  <!--todo change id of audio file to be unique or the fetched id so when audio is on multiple times no need or duplicate ids -->
  <p> {{ audioAttached }}</p>
  <audio ref="audioelm"  v-on:canplay="pauseSound" >
    <source ref="criteria" :src="audioAttached" type="audio/mpeg">
  </audio>
</div>
</template>

<script>
export default {
  props: {
    audioAttached: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      // audio element selector
      audioelm: '',
      // active class play button
      isActive: false,
      // playpauseiconholder
      playPause: 'sl sl-icon-control-play',
      // methodtwo could do if isactive etc
      isPlaying: false,
      audiotime: '',
      time: 0,
      audioDuration: '',
      errmsg: '',
    };
  },
  components: {},
  methods: {
    playpauseSound() {
      const soundsrc = this.$refs.audioelm;
      const playButtonicon = 'sl sl-icon-control-play';
      const pauseButtonicon = 'sl sl-icon-control-pause';

      this.audiotime = this.$refs.audioelm.currentTime;
      this.audioDuration = this.$refs.audioelm.duration;
      if (this.playPause === playButtonicon) {
        this.playPause = pauseButtonicon;
        soundsrc
          .play()
          .then(() => {})
          .catch((error) => {
            // An error ocurred or the user agent prevented playback.
            this.errmsg = error;
          });
      } else {
        this.playPause = playButtonicon;
        soundsrc.play();
      }
    },
    pauseSound() {},
    makeRed() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.red {
  border: 1px solid red;
  background-color: pink;
}
</style>
