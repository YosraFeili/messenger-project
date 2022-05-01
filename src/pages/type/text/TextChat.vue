<template>
<div class="">
  <div class="" v-for="message in type" :key="message.id">
    <q-chat-message
      :text="[message.text]"
      :avatar="message.avatar"
      :name="message.name"
      bg-color="white"
      sent
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
    <div class="time flex justify-end">{{ message.time }}</div>
  </div>
</div>
</template>

<script>
import { messages } from 'app/src'

export default {
  name: 'TextChat',
  props: ['messages'],
  computed: {
    type () {
      return messages.filter(message => {
        return message.type === 'text'
      })
    }
  }
}
</script>

<style scoped>
</style>
