<template>
  <div class="flex">
    <div class="bg flex-1 shadow-md">
      <ChatPageUser />
    </div>
    <div class="bg w-1/3 shadow-md">
      <div>
        <InboxHeader/>
      </div>
      <div>
        <InboxTab/>
      </div>
    </div>
  </div>
</template>

<script>
import InboxHeader from 'pages/inbox/inboxHeader'
import ChatPageUser from 'pages/home/ChatPageUser'
import InboxTab from 'pages/tabs/inbox-tab/inboxTab'
export default {
  name: 'PageIndex',
  components: { InboxTab, ChatPageUser, InboxHeader }

}
</script>
<style>
.bg {
  height: 699px;
}
</style>
