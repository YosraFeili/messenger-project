<template>
  <div class="">
    <div class="bg">
      <q-scroll-area :thumb-style="thumbStyle" style="height: 574px;">
        <div class="flex justify-between">

          <div class="ml-7 mt-5">
            <div class="" v-for="(mes, i) in data.meMessages" :key="i">

              <div class="mt-5" v-if="mes.typeContent === 'text'">
                <MeMessageText :mes="mes"/>
              </div>

              <div class="mt-5" v-if="mes.typeContent === 'music'">
                <MeMessageMusic :mes="mes"/>
              </div>

              <div class="mt-5" v-if="mes.typeContent === 'audio'">
                <MeMessageAudio :mes="mes"/>
              </div>

              <div class="mt-5" v-if="mes.typeContent === 'image'">
                <MeMessageImg :mes="mes"/>
              </div>

              <div class="mt-5" v-if="mes.typeContent === 'video'">
                <MeMessageVideo :mes="mes"/>
              </div>

              <div class="mt-5" v-if="mes.typeContent === 'file'"></div>
            </div>
          </div>

          <div class="mr-7 mt-16">
            <div v-for="(mes, i) in data.messages" :key="i">

              <div class="mt-10" v-if="mes.typeContent === 'music'">
                <MusicPlayer :mes="mes"/>
              </div>

              <div class="mt-10" v-if="mes.typeContent === 'audio'">
                <AudioPlayer :mes="mes"/>
              </div>

              <div class="mt-10 flex justify-end" v-if="mes.typeContent === 'image'">
                <ShowImage :mes="mes"/>
              </div>

              <div class="mt-10 flex justify-end" v-if="mes.typeContent === 'video'">
                <VideoPlayer :mes="mes"/>
              </div>

              <div class="mt-10 flex justify-end" v-if="mes.typeContent === 'text'">
                <TextChat :mes="mes"/>
              </div>

              <div class="mt-10" v-if="mes.typeContent === 'file'"></div>
            </div>
          </div>

        </div>

      </q-scroll-area>
    </div>
  </div>
</template>

<script>
import MusicPlayer from 'pages/type/music/MusicPlayer'
import AudioPlayer from 'pages/type/audio/AudioPlayer'
import ShowImage from 'pages/type/img/ShowImage'
import VideoPlayer from 'pages/type/video/VideoPlayer'
import TextChat from 'pages/type/text/TextChat'
import MeMessageText from 'pages/type/text/MeMessageText'
import MeMessageAudio from 'pages/type/audio/MeMessageAudio'
import MeMessageMusic from 'pages/type/music/MeMessageMusic'
import MeMessageImg from 'pages/type/img/MeMessageImg'
import MeMessageVideo from 'pages/type/video/MeMessageVideo'

export default {
  name: 'HomeBody',
  components: {
    MeMessageVideo,
    MeMessageImg,
    MeMessageMusic,
    MeMessageAudio,
    MeMessageText,
    TextChat,
    VideoPlayer,
    ShowImage,
    AudioPlayer,
    MusicPlayer
  },
  props: ['data'],

  data () {
    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        width: '2px',
        opacity: '0.75'
      }
    }
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
