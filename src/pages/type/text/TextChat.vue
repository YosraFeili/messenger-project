<template>
<div class="">
  <div class="">
    <q-chat-message
      :text="[mes.text]"
      :avatar="mes.avatar"
      :name="mes.name"
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

  </div>
</div>
</template>

<script>
export default {
  name: 'TextChat',

  props: ['mes']

}
</script>

<style scoped>
</style>
