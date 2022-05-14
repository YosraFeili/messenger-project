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
                <img src="../../../assets/icon/Play.svg" v-if="musicPlay">
                <img src="../../../assets/icon/Download.svg" @click="downloadMusic" v-if="musicDownload">
              </q-btn>
            </div>

            <div class="ml-1">
              <div class="flex items-center space-x-1">
                <div class="text cursor-default">{{ mes.singer_name }}</div>
                <div class="">-</div>
                <div class="text-2 cursor-default">{{ mes.file_name }}</div>
              </div>
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
              <q-item-section class="text-right">ذخیره</q-item-section>
            </q-item>
            <q-separator/>
            <q-item clickable v-close-popup>
              <q-item-section class="text-right">انتخاب</q-item-section>
            </q-item>
            <q-separator/>
            <q-item clickable v-close-popup>
              <q-item-section class="text-right">حذف</q-item-section>
            </q-item>
          </q-list>
        </q-menu>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',

  props: ['mes'],

  data () {
    return {
      musicDownload: true,
      musicPlay: false
    }
  },

  methods: {
    downloadMusic () {
      this.musicPlay = true
      this.musicDownload = false
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
.text-2{
  font-size: 10px;
  opacity: 0.5;
}
</style>
