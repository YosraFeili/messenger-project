<template>
  <div class="">
    <div class="" v-for="message in myText" :key="message.id">
      <q-chat-message
        :text="[message.text]"
        :avatar="message.avatar"
        :name="message.name"
        bg-color="blue-200"
      />
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
      <div class="flex space-x-20">
        <div class="time flex justify-start">{{ message.time }}</div>
        <img src="../../../assets/icon/Unseen-icon.svg">
      </div>
    </div>
  </div>
</template>

<script>
import { messages } from 'app/src'

export default {
  name: 'MeTextChat',
  props: ['messages'],
  computed: {
    myText () {
      return messages.filter(message => {
        return message.senderId === 'me'
      })
    }
  }
}
</script>

<style scoped>

</style>
