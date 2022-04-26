<template>
  <div class="">
    <div class="flex" v-if="chatPageUser">
      <div class="w-1/2" v-if="shareFile">
        <HomeTab :data="data" @close-share="closeShareFile"/>
      </div>
      <div class="w-1/2" :class="(shareFile)? 'w-1/2' : 'w-full'">
        <div class="">
          <HomeHeader @openShare="openShareFile" :data="data"/>
        </div>
        <div class="">
          <HomeBodyGroup/>
        </div>
        <div class="">
          <FooterType :share-file="shareFile"/>
        </div>
      </div>
    </div>
    <div class="bg" v-if="emptyChatPage"></div>
  </div>
</template>

<script>
import HomeBodyGroup from 'pages/group/HomeBodyGroup'
export default {
  name: 'ChatPageGroup',
  components: { HomeBodyGroup }
}
</script>

<style scoped>
.bg{
  background: #0055ff;
  opacity: 0.1;
}
</style>
