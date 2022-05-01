<template>
  <div class="">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 1000px">
        <div class="" v-for="message in type" :key="message.id">
          <q-chat-message
            :avatar="message.avatar"
            :name="message.name"
            bg-color="white" sent>
            <div class="time flex justify-end">
              <div class="">
                <div class="">
                  <div class="title text-white text-center cursor-default" v-if="fileSize">{{message.file_size}}</div>
                  <img src="../../../assets/img/Video-img.svg">
                  <div class="-mt-20 flex justify-center" v-if="videoPlay">
                    <img src="../../../assets/icon/Video-Player.svg" class="cursor-pointer">
                  </div>

                  <div class="-mt-20 flex justify-center" v-if="videoDownload">
                    <img src="../../../assets/icon/Video-Download.svg" class="cursor-pointer" @click="downloadVideo">
                  </div>
                </div>
                <div class="text-right text-sm mt-10">{{ message.file_name }}</div>
              </div>
            </div>
          </q-chat-message>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { messages } from 'app/src'

export default {
  name: 'VideoPlayer',
  props: ['messages'],
  computed: {
    type () {
      return messages.filter(message => {
        return message.type === 'image'
      })
    }
  },
  data () {
    return {
      videoDownload: true,
      videoPlay: false,
      fileSize: false
    }
  },
  methods: {
    downloadVideo () {
      this.videoPlay = true
      this.fileSize = true
      this.videoDownload = false
    }
  }
}
</script>

<style scoped>
.title {
  background: #1e1e1e;
  width: 41px;
  height: 13px;
  border-radius: 50px;
  position: fixed;
  top: 42px;
  left: 810px;
  font-size: 9px;
}
</style>
