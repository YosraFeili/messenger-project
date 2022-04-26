<template>
<div class="">
  <div class="footer flex justify-between items-center">
    <div class="flex space-x-5">
      <div class="ml-5 cursor-pointer">
        <img src="../../assets/icon/Arrow-back.svg">
      </div>
      <div class="cursor-pointer">
        <img src="../../assets/icon/Delete.svg">
      </div>
      <div class="cursor-pointer">
        <img src="../../assets/icon/Document.svg">
      </div>
      <div class="cursor-pointer">
        <img src="../../assets/icon/Arrow-Right.svg">
      </div>
    </div>
    <div class="flex space-x-5">
      <div class="text-white cursor-pointer">3</div>
      <div class="cursor-pointer">
        <img src="../../assets/icon/CloseSquare.svg" class="mr-5 ">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SingleSelectFooter'
}
</script>

<style scoped>
.footer {
  height: 68px;
  background:  #0055FF;
}
</style>
