<template>
<div class="">
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 1000px">
      <div class="flex justify-center">
      </div>
      <div class="">
        <q-chat-message bg-color="blue-200" sent>
        <div class="time flex justify-end">
          <div class="">
            <div class="">
              <img src="../../../assets/img/Video-img.svg">
              <div class="-mt-20 flex justify-center" v-if="videoPlay">
                <img src="../../../assets/icon/Video-Player.svg" class="cursor-pointer">
              </div>

              <div class="-mt-20 flex justify-center" v-if="videoDownload">
                <img src="../../../assets/icon/Video-Download.svg" class="cursor-pointer" @click="downloadVideo">
              </div>
            </div>
            <div class="text-right text-sm mt-10">عنوان</div>
          </div>
        </div>
        </q-chat-message>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data () {
    return {
      videoDownload: true,
      videoPlay: false
    }
  },
  methods: {
    downloadVideo () {
      this.videoPlay = true
      this.videoDownload = false
    }
  }
}
</script>

<style scoped>

</style>
