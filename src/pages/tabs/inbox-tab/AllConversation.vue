<template>
<div class="">
  <div class="cursor-pointer hover:bg-blue-100" v-for="chat in chats" :key="chat.id" @click="showChatPage(chat)">
      <q-menu touch-position context-menu>

        <q-list class="items-center" dense style="min-width: 146px">
          <q-item clickable v-close-popup>
            <q-item-section class="text-right">بی صدا</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section class="text-right">سنجاق</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup @click="popUpDelete=true">
            <q-item-section class="text-right">حذف مکالمه</q-item-section>
          </q-item>
        </q-list>

      </q-menu>

    <q-list class="border-b-2 border-gray-100" >
      <q-item>

        <q-item-section side top>
          <div class="text mb-1">{{ chat.lastSeen }}</div>
          <q-badge rounded color="primary" label="9" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-right">{{ chat.name }}</q-item-label>
          <q-item-label class="text-right" caption>{{chat.status}}</q-item-label>
        </q-item-section>

        <q-item-section top avatar>
          <q-avatar>
            <img :src="chat.image">
          </q-avatar>
        </q-item-section>

      </q-item>
    </q-list>

  </div>

  <div class="bg-popUp flex justify-center items-center" v-if="popUpDelete">
    <DeleteChat @delete-conversation="deleteConversation()"  @cancel="cancelDelete"/>
  </div>
</div>
</template>

<script>
import { chatList } from 'app/src'
import DeleteChat from 'pages/menu/contextMenu/DeleteChat'
export default {
  name: 'AllConversation',
  components: { DeleteChat },
  data () {
    return {
      chats: (chatList),
      popUpDelete: false
    }
  },
  methods: {
    showChatPage (contact) {
      this.$emitter.emit('showChat', contact)
    },
    deleteConversation () {
      console.log('user deleted')
      this.popUpDelete = false
    },
    cancelDelete () {
      this.popUpDelete = false
      console.log('cancel')
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 10px;
  color: #1e1e1e;
}
.bg-popUp {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(30, 30, 30, 0.6);
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
</style>
