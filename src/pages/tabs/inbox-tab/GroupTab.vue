<template>
  <div class="">
    <div class="cursor-pointer hover:bg-blue-100" v-for="group in groups" :key="group.id" @click="showChatPage(group)">
      <q-list class="border-b-2 border-gray-100">
        <q-item>
          <q-item-section side top>
            <div class="text mb-1">{{ group.lastSeen }}</div>
            <q-badge rounded color="primary" label="9" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-right">{{ group.nameGroup }}</q-item-label>
            <q-item-label class="text-right" caption>{{group.name}}</q-item-label>
          </q-item-section>

          <q-item-section top avatar>
            <q-avatar>
              <img :src="group.image">
            </q-avatar>
          </q-item-section>

        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { chatList } from 'app/src'

export default {
  name: 'GroupTab',
  data () {
    return {
      groups: (chatList.group)
    }
  },
  methods: {
    showChatPage (group) {
      this.$emitter.emit('showChat', group)
    }
  }
}
</script>

<style scoped>

</style>
