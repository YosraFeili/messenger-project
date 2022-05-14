<template>
<div class="">
  <BaseChatMessage :text="text" :time="time"/>
</div>
</template>

<script>
import BaseChatMessage from 'pages/chat-message/BaseChatMessage'
export default {
  name: 'BaseChat',
  components: { BaseChatMessage }
}
</script>

<style scoped>

</style>
