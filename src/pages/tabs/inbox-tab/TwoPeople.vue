<template>
  <div class="">
    <q-scroll-area :thumb-style="thumbStyle" style="height: 574px;">
    <div class="cursor-pointer hover:bg-blue-100" v-for="people in pvChats" :key="people.id"
         @click="showChatPage(people)">
      <q-list class="border-b-2 border-gray-100">
        <q-item>
          <q-item-section side top>
            <div class="text mb-1">{{ people.lastSeen }}</div>
            <q-badge rounded color="primary" label="9"/>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-right">{{ people.name }}</q-item-label>
            <q-item-label class="text-right" caption>{{ people.status }}</q-item-label>
          </q-item-section>

          <q-item-section top avatar>
            <q-avatar>
              <img :src="people.avatar">
            </q-avatar>
          </q-item-section>

        </q-item>
      </q-list>
    </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { chatList } from 'app/src'

export default {
  name: 'TwoPeople',
  computed: {
    pvChats () {
      return chatList.filter(chat => {
        return chat.type === 'pv'
      })
    }
  },
  data () {
    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '2px',
        opacity: '0.75'
      }
    }
  },
  methods: {
    showChatPage (people) {
      this.$emitter.emit('showChat', people)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 10px;
  color: #1e1e1e;
}
</style>
