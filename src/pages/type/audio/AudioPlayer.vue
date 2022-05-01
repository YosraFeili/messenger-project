<template>
  <div class="">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 1000px">
        <div class="" v-for="message in type" :key="message.id">
          <q-chat-message class="my-card"
          :avatar="message.avatar"
          :name="message.name"
           bg-color="white" sent>
            <div class="">
              <div class="flex justify-between items-center">
                <div class="">
                  <q-btn class="btn">
                    <img src="../../../assets/icon/Play.svg" v-if="audioPlay">
                    <img src="../../../assets/icon/Download.svg" @click="downloadAudio" v-if="audioDownload">
                  </q-btn>
                </div>
                <div class="flex space-x-20">
                  <div class="flex space-x-1 ml-1">
                    <div class="text mb-8 cursor-default">{{ message.file_name }}</div>
                    <div class="text cursor-default">{{ message.singer_name }}</div>
                  </div>
                  <div class="flex items-start mr-5 cursor-pointer">
                    <img src="../../../assets/icon/Song-icon.svg">
                  </div>
                </div>
                <q-separator dark inset/>
                <div class="flex space-x-32 -mt-5">
                  <div class="text ml-9 cursor-default">{{ message.file_time }}</div>
                  <div class="text cursor-default">{{ message.file_size }}</div>
                </div>
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
  name: 'AudioPlayer',

  props: ['messages'],

  computed: {
    type () {
      return messages.filter(message => {
        return message.type === 'audio'
      })
    }
  },

  data () {
    return {
      audioDownload: true,
      audioPlay: false
    }
  },

  methods: {
    downloadAudio () {
      this.audioPlay = true
      this.audioDownload = false
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 292px;
  height: 63px;
}

.btn {
  background: #0055ff;
  border-radius: 8px;
  width: 59px;
  height: 59px;
}

.text {
  font-size: 10px;
}
</style>
