<template>
  <div class="bg">
    <div class="header flex justify-between items-center">
      <div class="ml-5 text-white">ارسال فایل</div>
      <div class="mr-5">
        <img src="../../../assets/icon/CloseSquare.svg" class="cursor-pointer" @click="closeFile">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileAttach',
  methods: {
    closeFile () {
      this.$emit('close-file')
    }
  }
}
</script>

<style scoped>
.bg {
  position: fixed;
  background: #7C7C7C;
  height: 573px;
  width: 1066px;
  bottom: 159px;
  right: 33.5%;
}

.header {
  height: 48px;
  background: #0055FF;
}
</style>
