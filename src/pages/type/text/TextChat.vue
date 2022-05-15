<template>
  <div class="">
    <div class="">
      <div class="flex items-center space-x-1">
        <div class="q-chat">{{mes.text}}</div>
        <div class="">
          <img :src="mes.avatar" class="background-img">
        </div>
      </div>
      <div class="flex items-center space-x-32">
        <div class="text ">{{ mes.time }}</div>
        <div class="text ">{{ mes.name }}</div>
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
  name: 'TextChat',

  props: ['mes'],

  data () {
    return {
      text: ''
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
  width: 200px;
  height: 60px;
  border-radius: 10px 10px 0px 10px;
  color: #1e1e1e;
  padding: 5px;
}
.text{
  font-size: 10px;
}
.background-img{
  width: 50px;
  height: 50px;
  background: #20B46D;
  border-radius: 10px;
}
</style>
