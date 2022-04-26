<template>
<div class="">
  <div class="bg-file">
    <div class="header flex justify-between items-center">
      <div class="ml-3">
        <img src="../../assets/icon/CloseSquare.svg">
      </div>
      <div class="mr-3 text-white mr-3">ارسال فایل</div>
    </div>
    <div class="body flex justify-center items-center">
      <div class="">
        <img src="../../assets/icon/Img-file.svg">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'File',
  data () {
    return {
      FilePage: false
    }
  }
}
</script>

<style scoped>
.bg-file {
  position: absolute;
  top: 56px;
  left: 56px;
  height: 574px;
  overflow: hidden;
  z-index: 1;
}
.header{
  background: #0055ff;
  height: 48px;
}
.body {
  height: 526px;
  background: #7C7C7C;
}
</style>
