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
          <HomeBody :data="data"/>
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
import HomeHeader from 'pages/home/HomeHeader'
import HomeBody from 'pages/home/HomeBody'
import FooterType from 'pages/footer-type/FooterType'
import HomeTab from 'pages/tabs/home-tab/HomeTab'
export default {
  name: 'ChatPageUser',
  components: { HomeTab, FooterType, HomeBody, HomeHeader },
  data () {
    return {
      shareFile: false,
      data: [],
      emptyChatPage: false,
      chatPageUser: true
    }
  },
  mounted () {
    this.emptyChatPage = true
    this.chatPageUser = false
  },
  created () {
    this.subsGroup = this.$emitter.group(
      this.$emitter.listen('showChat', (contact) => {
        this.chatPageUser = true
        this.emptyChatPage = false
        this.data = contact
        console.log(this.data)
      })
    )
  },
  destroyed () {
    this.subsGroup.unsubscribe()
  },
  methods: {
    openShareFile () {
      this.shareFile = true
    },
    closeShareFile () {
      this.shareFile = false
    }
  }
}
</script>

<style scoped>
.bg{
  background: #0055ff;
  opacity: 0.1;
}
</style>
