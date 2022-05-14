<template>
  <div class="">
    <div style="width: 100%; max-width: 1000px">

      <div class="">
        <q-chat-message
          :avatar="mes.avatar"
          :name="mes.name"
          bg-color="white"
          sent>

          <div class="time flex justify-between">

            <div class="">
              <q-btn class="btn">
                <img src="../../../assets/icon/Play.svg" v-if="audioPlay">
                <img src="../../../assets/icon/Download.svg" @click="downloadAudio" v-if="audioDownload">
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
    </div>
    </div>
</template>

<script>
export default {
  name: 'AudioPlayer',

  props: ['mes'],

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

.btn {
  background: #0055ff;
  border-radius: 8px;
  width: 59px;
  height: 59px;
}

.text {
  font-size: 12px;
}
</style>
