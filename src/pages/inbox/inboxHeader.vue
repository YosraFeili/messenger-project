<template>
  <div class="">
    <div class="header bg-primary flex justify-between items-center" :class="(searchIcon)? 'hidden': ''">
      <div class="flex space-x-5">
        <div class="">
          <ConversationIcon/>
        </div>
        <div class="cursor-pointer" @click="searchIcon=true">
          <img src="../../assets/icon/Search.svg">
        </div>
      </div>
      <div class="text-white mr-5">پیام ها</div>
    </div>

    <div class="">
      <SearchInbox v-if="searchIcon" @searchIcon="closeSearchIcon"/>
    </div>
  </div>
</template>

<script>
import ConversationIcon from 'pages/pop-up-icons/ConversationIcon'
import SearchInbox from 'pages/inbox/SearchInbox'

export default {
  name: 'inboxHeader',
  components: { SearchInbox, ConversationIcon },
  data () {
    return {
      searchIcon: false
    }
  },
  methods: {
    closeSearchIcon () {
      this.searchIcon = false
    }
  }
}
</script>

<style scoped>
.header {
  height: 57px;
  font-size: 16px;
}
</style>
