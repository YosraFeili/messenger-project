<template>
  <div class="">
    <div class="bg">
      <q-scroll-area :thumb-style="thumbStyle" style="height: 574px;">
        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 1000px">
            <div class="">
              <VideoPlayer :messages="messages" v-if="showImage"/>
              <AudioPlayer :messages="messages" v-if="showAudio"/>
              <TextChat :messages=messages v-if="showText"/>
            </div>

            <div class="">
             <MeTextChat :messages="messages"/>
            </div>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>

import { messages } from 'app/src'
import VideoPlayer from 'pages/type/video/VideoPlayer'
import AudioPlayer from 'pages/type/audio/AudioPlayer'
import TextChat from 'pages/type/text/TextChat'
import MeTextChat from 'pages/type/text/MeTextChat'

export default {
  name: 'HomeBody',
  components: { MeTextChat, TextChat, AudioPlayer, VideoPlayer },
  props: ['data'],

  data () {
    return {
      messages: messages,

      showImage: false,

      showAudio: false,

      showText: false,

      showFile: false,

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        width: '2px',
        opacity: '0.75'
      }
    }
  },
  mounted () {
    if (this.message.type === 'image') {
      this.showImage = true
    } else if (this.message.type === 'audio') {
      this.showAudio = true
    } else this.showText = true
  }
}
</script>

<style scoped>
.bg {
  background: #878787;
  height: 574px;
  color: white;
  opacity: 0.9;
}
</style>
