<template>
<div class="">
  <div class="">
    <q-chat-message
      :text="['hghgh']"
      :avatar="avatar"
      name="other"
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
    <div class="time flex justify-end">7:00</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TextChat'
}
</script>

<style scoped>
.bg-data {
  background: #323232;
  width: 94px;
  height: 24px;
  border-radius: 22px;
}
</style>
