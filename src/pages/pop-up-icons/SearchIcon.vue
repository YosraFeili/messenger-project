<template>
<div class="">
  <div class="cursor-pointer">
    <img src="../../assets/icon/Search.svg" @click="searchIcon=true">
  </div>

  <div class="bg-popUp" v-if="searchIcon">
    <div class="pop-up bg-white">
      <div class="header-popUp flex justify-between items-center">
        <div class="ml-3">
          <img src="../../assets/icon/CloseSquare.svg" @click="searchIcon=false">
        </div>
        <div class="">
        </div>
        <div class="flex mr-3">
          <q-input v-model="text" placeholder="جستجو کنید"/>
          <img src="../../assets/icon/ArrowLeft.svg">
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
  name: 'SearchIcon',
  components: { SelectConversation },
  data () {
    return {
      searchIcon: false,
      text: ''
    }
  }
}
</script>

<style scoped>
.bg-popUp {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(30, 30, 30, 0.604223);
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
