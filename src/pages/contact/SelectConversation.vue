<template>
  <div class="">
    <div class="" v-for="contact in contacts" :key="contact.id">
        <div class="">
          <q-card class="my-card flex items-center border-b-2 border-gray-100 px-4" flat>
            <div class="">
              <q-item-section>
                <q-checkbox dense v-model="select"/>
              </q-item-section>
            </div>

            <div class="flex flex-1">
              <q-item-section>
                <q-item-label class="text-right cursor-default">{{contact.name}}</q-item-label>
                <q-item-label class="font-status text-right cursor-default" caption>
                  {{ contact.lastSeen }}
                </q-item-label>
              </q-item-section>
              <q-item-section top avatar>
                <q-avatar>
                  <img :src="contact.avatar">
                </q-avatar>
              </q-item-section>
            </div>

            <q-separator />
          </q-card>
        </div>
      </div>
    </div>
</template>

<script>
import { contacts } from 'app/src'

export default {
  name: 'SelectConversation',
  data () {
    return {
      select: false,
      contacts: contacts
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 360px;
  height: 69px;
  font-size: 12px;
}
.font-status{
  font-size: 10px;
}
</style>
