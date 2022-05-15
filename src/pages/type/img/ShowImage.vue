<template>
  <div class="">
    <div class="flex items-center space-x-1">
      <div class="q-chat bg-blue-200">
          <div class="time flex justify-end">
            <div class="">
              <div class="">
                <div class="title text-white text-center cursor-default" v-if="fileSize">{{ mes.file_size }}</div>
                <img :src="mes.img" v-if="imgDownload" class="rounded-xl">
                <img :src="mes.loadImg" v-if="imgload" class="rounded-xl">
                <div class="flex justify-center" v-if="imgDownload">
                  <img src="../../../assets/icon/Video-Download.svg" class="download cursor-pointer"
                       @click="downloadImg">
                </div>
              </div>
              <div class="text-right text-sm">{{ mes.file_name }}</div>
            </div>
          </div>
      </div>

      <div class="">
        <img :src="mes.avatar" class="background-img">
      </div>
    </div>

    <div class="flex items-center space-x-40 mt-2">
      <div class="text-footer">{{ mes.time }}</div>
      <div class="text-footer">{{ mes.name }}</div>
    </div>

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
  </div>
</template>

<script>
export default {
  name: 'ShowImage',

  props: ['mes'],

  data () {
    return {
      imgDownload: true,

      imgload: false,

      fileSize: false
    }
  },

  methods: {
    downloadImg () {
      this.imgload = true
      this.fileSize = true
      this.imgDownload = false
    }
  }
}
</script>

<style scoped>
.q-chat {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 205px;
  height: 154px;
  border-radius: 10px 10px 0px 10px;
  color: #1e1e1e;
  padding: 5px;
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

.download {
  position: absolute;
  bottom: 370px;
}

.text-footer {
  font-size: 10px;
}

.background-img {
  width: 50px;
  height: 50px;
  background: #20B46D;
  border-radius: 10px;
}
</style>
