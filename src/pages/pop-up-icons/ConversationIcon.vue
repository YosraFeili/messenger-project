<template>
<div class="">
  <div class="">
    <img src="../../assets/icon/Chat.svg" class="cursor-pointer ml-5" @click="conversationIcon=true">
  </div>

  <div class="bg-popUp" v-if="conversationIcon">
    <div class="pop-up bg-white">
      <div class="header-popUp flex justify-between items-center">
        <div class="ml-3">
          <img src="../../assets/icon/Search.svg">
        </div>
        <div class="text-white">انتخاب گفتگو</div>
        <div class="mr-3">
          <img src="../../assets/icon/CloseSquare.svg" @click="conversationIcon=false">
        </div>
      </div>
      <div class="">
        <SelectConversation/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SelectConversation from 'pages/contact/SelectConversation'
export default {
  name: 'ConversationIcon',
  components: { SelectConversation },
  data () {
    return {
      conversationIcon: false
    }
  }
}
</script>

<style scoped>
.bg-popUp {
  position: absolute;
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
.pop-up {
  background: #ffffff;
  width: 360px;
  height: 601px;
  position: absolute;
  left: calc(50% - 360px/2);
  top: 129px;
}
.header-popUp {
background: #0055ff;
  width: 360px;
  height: 56px;
}
</style>
