<template>
  <div class="">
    <div class="flex items-center space-x-5">
      <div class="rounded-full bg-white">
        <img src="../../assets/icon/Arrow-Left(1).svg">
      </div>
      <div class="q-chat" :style="(text.length>=50)? 'height:80px;width:360px;padding:7px' : '' ">{{text}}</div>
    </div>
    <div class="flex items-center space-x-40" :class="(text.length>=50)? 'space-x-80' : '' ">
      <div class="ml-11">{{ time }}</div>
      <div class="">
        <img src="../../assets/icon/Unseen-icon.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseChatMessage',
  props: [
    {
      text: {
        type: [String, Number, Object]
      },

      time: {
        type: [String, Number]
      }
    }
  ],
  data () {
    return {
      text: 'gkfgfgfgjfkg ldgfgfdlfdfdf ',
      time: '2:30'
    }
  }
}
</script>

<style scoped>
.q-chat {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 60px;
  border-radius: 10px 10px 10px 0px;
  color: #1e1e1e;
  padding:5px;
}
</style>
