<template>
  <div class="">
    <div class="bg">
      <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 1000px">
          <div class="flex justify-center">
            <q-chat-message class="bg-data" label="Sunday, 19th"/>
          </div>
          <div class="">
            <q-chat-message
              :text="['doing fine, how r you?']"
              sent
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              name="Jane"
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
            <div class="time flex justify-end">7:12</div>
          </div>

          <div class="">
            <q-chat-message
              :text="['hey, how are you?']"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              name="me"
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
              <div class="time flex justify-start">7:13</div>
              <img src="../../assets/icon/Unseen-icon.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBodyGroup'
}
</script>

<style scoped>
.bg {
  background: #878787;
  height: 574px;
  color: white;
  opacity: 0.9;
}

.bg-data {
  background: #323232;
  width: 94px;
  height: 24px;
  border-radius: 22px;
}
</style>
