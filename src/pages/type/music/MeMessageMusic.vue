<template>
<div class="">
    <div class="">
      <div class="flex items-center space-x-5">

        <div class="q-chat bg-blue-200" :style="(ph.length>=50)? 'height:80px;width:360px;padding:7px' : '' ">
          <div class="flex justify-between items-center">
            <div class="">
              <q-btn class="btn">
                <img src="../../../assets/icon/Play.svg" v-if="musicPlay">
                <img src="../../../assets/icon/Download.svg" @click="downloadMusic" v-if="musicDownload">
              </q-btn>
            </div>

            <div class="ml-2">
              <div class="flex items-center space-x-1">
                <div class="text cursor-default">{{ mes.singer_name }}</div>
                <div class="">-</div>
                <div class="text-2 cursor-default">{{ mes.file_name }}</div>
              </div>
              <div class="">
                <hr/>
              </div>
              <div class="flex space-x-36">
                <div class="text cursor-default">{{ mes.file_time }}</div>
                <div class="text cursor-default">{{ mes.file_size }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-60" :class="(ph.length>=50)? 'space-x-80' : '' ">
        <div class="">{{ mes.time }}</div>
        <div class="">
          <img src="../../../assets/icon/Unseen-icon.svg">
        </div>
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
</div>
</template>

<script>
export default {
  name: 'MeMessageMusic',
  props: ['mes'],
  data () {
    return {
      musicDownload: true,
      musicPlay: false,
      ph: ''
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
.q-chat {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 292px;
  height: 63px;
  border-radius: 10px 10px 10px 0px;
  color: #1e1e1e;
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
.text-2{
  font-size: 10px;
  opacity: 0.5;
}
</style>
