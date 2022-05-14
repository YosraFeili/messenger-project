<template>
  <div class="">
    <div class="">
      <q-chat-message
        :avatar="mes.avatar"
        :name="mes.name"
        bg-color="white"
        sent>

        <div class="time flex justify-end">
          <div class="">
            <div class="">
              <div class="title text-white text-center cursor-default" v-if="fileSize">{{ mes.file_size }}
              </div>
              <img :src="mes.file_url">
              <div class="-mt-20 flex justify-center" v-if="videoPlay">
                <img src="../../../assets/icon/Video-Player.svg" class="cursor-pointer">
              </div>

              <div class="-mt-20 flex justify-center" v-if="videoDownload">
                <img src="../../../assets/icon/Video-Download.svg" class="cursor-pointer" @click="downloadVideo">
              </div>
            </div>
            <div class="text-right text-sm mt-10">{{ mes.file_name }}</div>
          </div>
        </div>
      </q-chat-message>

    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',

  props: ['mes'],

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
  position: absolute;
  font-size: 9px;
  z-index: 1;
}
</style>
