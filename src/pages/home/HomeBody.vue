<template>
  <div class="">
    <div class="bg">
      <q-scroll-area :thumb-style="thumbStyle" style="height: 574px;">

        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 1000px" v-for="(mes, i) in data.messages" :key="i">

            <div class="" v-if="mes.typeContent === 'music'">
              <MusicPlayer :mes="mes"/>
            </div>

            <div class="" v-if="mes.typeContent === 'audio'">
              <AudioPlayer :mes="mes"/>
            </div>

            <div class="" v-if="mes.typeContent === 'image'">
             <ShowImage :mes="mes"/>
            </div>

            <div class="" v-if="mes.typeContent === 'video'">
             <VideoPlayer :mes="mes"/>
            </div>

            <div class="" v-if="mes.typeContent === 'text'">
              <TextChat :mes="mes"/>
            </div>

            <div class="" v-if="mes.typeContent === 'file'"></div>
          </div>
        </div>

        <div class="ml-7">
          <div class="" v-for="(mes, i) in data.meMessages" :key="i">

            <div class="" v-if="mes.typeContent === 'text'">

              <q-chat-message
                :text="[mes.text]"
                :avatar="mes.avatar"
                bg-color="blue-200"
              />

              <q-menu
                touch-position
                context-menu
              >

                <q-list class="items-center" dense style="min-width: 146px">
                  <q-item clickable v-close-popup>
                    <q-item-section class="text-right">پاسخ</q-item-section>
                  </q-item>
                  <q-separator/>
                  <q-item clickable v-close-popup>
                    <q-item-section class="text-right">باز ارسال</q-item-section>
                  </q-item>
                  <q-separator/>
                  <q-item clickable v-close-popup>
                    <q-item-section class="text-right">ارسال پیام</q-item-section>
                  </q-item>
                  <q-separator/>
                  <q-item clickable v-close-popup>
                    <q-item-section class="text-right">ذخیره</q-item-section>
                  </q-item>
                </q-list>
                <q-separator/>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-right">انتخاب</q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-right">حذف</q-item-section>
                </q-item>
              </q-menu>

              <div class="flex space-x-20">
                <div class="time flex justify-start">{{ mes.time }}</div>
                <img src="../../assets/icon/Unseen-icon.svg">
              </div>

            </div>

            <div class="" v-if="mes.typeContent === 'music'">
              <q-chat-message
                :avatar="mes.avatar"
                bg-color="blue-200">
                <div class="time flex justify-between">

                  <div class="">
                    <q-btn class="btn">
                      <img src="../../assets/icon/Play.svg" v-if="audioPlay">
                      <img src="../../assets/icon/Download.svg" @click="downloadAudio" v-if="audioDownload">
                    </q-btn>
                  </div>

                  <div class="ml-1">
                    <div class="text cursor-default">{{ mes.name }}</div>
                    <div class="mt-3">
                      <hr/>
                    </div>
                    <div class="flex space-x-32 mt-2">
                      <div class="text cursor-default">{{ mes.file_time }}</div>
                      <div class="text cursor-default">{{ mes.file_size }}</div>
                    </div>
                  </div>

                </div>
              </q-chat-message>
            </div>

            <div class="" v-if="mes.typeContent === 'audio'">

              <q-chat-message
                :avatar="mes.avatar"
                bg-color="blue-200">
                <div class="time flex justify-between">

                  <div class="">
                    <q-btn class="btn">
                      <img src="../../assets/icon/Play.svg" v-if="audioPlay">
                      <img src="../../assets/icon/Download.svg" @click="downloadAudio" v-if="audioDownload">
                    </q-btn>
                  </div>

                  <div class="ml-1">
                    <div class="text cursor-default">{{mes.name}}</div>
                    <div class="mt-3">
                      <hr/>
                    </div>
                    <div class="flex space-x-32 mt-2">
                      <div class="text cursor-default">{{ mes.file_time }}</div>
                      <div class="text cursor-default">{{ mes.file_size }}</div>
                    </div>
                  </div>

                </div>
              </q-chat-message>
            </div>

            <div class="" v-if="mes.typeContent === 'image'">
              <q-chat-message
                :avatar="mes.avatar"
                :name="mes.name"
                bg-color="blue-200"
              >

                <div class="time flex justify-end">
                  <div class="">
                    <div class="">
                      <div class="title text-white text-center cursor-default" v-if="fileSize">{{ mes.file_size }}</div>
                      <img :src="mes.img" v-if="imgDownload">
                      <img :src="mes.loadImg" v-if="imgload">
                      <div class="-mt-20 flex justify-center" v-if="imgDownload">
                        <img src="../../assets/icon/Video-Download.svg" class="cursor-pointer" @click="downloadImg">
                      </div>
                    </div>
                    <div class="text-right text-sm mt-10">{{ mes.file_name }}</div>
                  </div>
                </div>
              </q-chat-message>
            </div>

            <div class="" v-if="mes.typeContent === 'video'">
              <div class="">
                <q-chat-message
                  :avatar="mes.avatar"
                  :name="mes.name"
                  bg-color="blue-200"
                >

                  <div class="time flex justify-end">
                    <div class="">
                      <div class="">
                        <div class="title text-white text-center cursor-default" v-if="fileSize">{{ mes.file_size }}
                        </div>
                        <img :src="mes.file_url">
                        <div class="-mt-20 flex justify-center" v-if="videoPlay">
                          <img src="../../assets/icon/Video-Player.svg" class="cursor-pointer">
                        </div>

                        <div class="-mt-20 flex justify-center" v-if="videoDownload">
                          <img src="../../assets/icon/Video-Download.svg" class="cursor-pointer" @click="downloadVideo">
                        </div>
                      </div>
                      <div class="text-right text-sm mt-10">{{ mes.file_name }}</div>
                    </div>
                  </div>
                </q-chat-message>

              </div>
            </div>

            <div class="" v-if="mes.typeContent === 'file'"></div>
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

export default {
  name: 'HomeBody',
  components: { TextChat, VideoPlayer, ShowImage, AudioPlayer, MusicPlayer },
  props: ['data'],

  data () {
    return {
      musicDownload: true,
      musicPlay: false,

      audioDownload: true,
      audioPlay: false,

      imgDownload: true,
      imgload: false,
      fileSize: false,

      videoDownload: true,
      videoPlay: false,

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        width: '2px',
        opacity: '0.75'
      }
    }
  },
  methods: {
    downloadMusic () {
      this.musicPlay = true
      this.musicDownload = false
    },

    downloadAudio () {
      this.audioPlay = true
      this.audioDownload = false
    },

    downloadImg () {
      this.imgload = true
      this.fileSize = true
      this.imgDownload = false
    },

    downloadVideo () {
      this.videoPlay = true
      this.fileSize = true
      this.videoDownload = false
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

.btn {
  background: #0055ff;
  border-radius: 8px;
  width: 59px;
  height: 59px;
}

.text {
  font-size: 12px;
}

.title {
  background: #1e1e1e;
  width: 41px;
  height: 13px;
  border-radius: 50px;
  position: absolute;
  font-size: 9px;
  z-index: 1;
}
</style>
