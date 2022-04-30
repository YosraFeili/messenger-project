<template>
  <div class="header flex justify-between items-center bg-primary">
    <div class="ml-4 cursor-pointer">
      <img src="../../assets/icon/CloseSquare.svg" @click="closeSearchIcon">
    </div>
    <div class="flex mr-4">
      <q-input  v-model="text" label-color="white" label="جستجو کنید"/>
      <img src="../../assets/icon/ArrowLeft.svg">
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchInbox',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    closeSearchIcon () {
      this.$emit('searchIcon')
    }
  }
}
</script>

<style scoped>
.header {
  height: 57px;
  font-size: 16px;
}
.text {
  font-size: 10px;
  color: #1e1e1e;
}
</style>
