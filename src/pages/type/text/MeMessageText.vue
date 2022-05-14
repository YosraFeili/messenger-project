<template>
  <div class="">
    <div class="flex items-center space-x-5">

      <div class="q-chat bg-blue-200" :style="(ph.length>=50)? 'height:80px;width:360px;padding:7px' : '' ">
        <div class="">
          <div class="">
            {{mes.text}}
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
</template>

<script>
export default {
  name: 'MeMessageText',
  props: ['mes'],
  data () {
    return {
      ph: ''
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
  padding: 5px;
}
</style>
