<template>
<div class="header flex justify-between items-center shadow-sm">
  <div class="flex space-x-4">
      <img src="../../assets/icon/Down-icon.svg" class="ml-5 cursor-pointer">
      <img src="../../assets/icon/Up-icon.svg" class="cursor-pointer">
  </div>
    <div class="flex mr-4">
      <q-input  v-model="text" label-color="white" label="جستجو کنید"/>
      <img src="../../assets/icon/Arrow-Left(1).svg" class="cursor-pointer" @click="closeSearchHome">
    </div>
</div>
</template>

<script>
export default {
  name: 'SearchHome',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    closeSearchHome () {
      this.$emit('searchHome')
    }
  }
}
</script>

<style scoped>
.header {
  height: 57px;
  background: #ffffff;
}
</style>
