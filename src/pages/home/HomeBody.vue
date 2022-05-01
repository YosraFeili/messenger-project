<template>
  <div class="">
    <div class="bg">
      <q-scroll-area :thumb-style="thumbStyle" style="height: 574px;">
        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 1000px">
            <div class="">
              <VideoPlayer v-if="showImage"/>
              <AudioPlayer v-if="showAudio"/>
              <TextChat v-if="showText"/>
            </div>

            <div class="" v-for="message in myText" :key="message.id">
              <q-chat-message
                :text="[message.text]"
                :avatar="message.avatar"
                :name="message.name"
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
                <div class="time flex justify-start">{{ message.time }}</div>
                <img src="../../assets/icon/Unseen-icon.svg">
              </div>
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

export default {
  name: 'HomeBody',
  components: { TextChat, AudioPlayer, VideoPlayer },
  props: ['data'],
  computed: {
    myText () {
      return messages.filter(message => {
        return message.senderId === 'me'
      })
    },
    senderId () {
      return messages.filter(message => {
        return message.senderId === 12
      })
    }
  },
  data () {
    return {
      messages: messages,

      showImage: false,

      showAudio: false,

      showText: false,

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
