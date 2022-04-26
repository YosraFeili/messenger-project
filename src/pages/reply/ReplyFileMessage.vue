<template>
  <div class="flex justify-center q-pa-md row items-start q-gutter-md">
    <div class="my-card flex justify-center items-center">
      <div class="second-card flex justify-between items-center">
        <div class="ml-5">
          <img src="../../assets/icon/Close-reply.svg">
        </div>

        <div class="flex">
          <div class="mr-3">
            <div class="text-right text-subtitle2 text-blue-8">name</div>
            <div class="text-right">fileName.pdf</div>
          </div>
          <div class="">
            <img src="../../assets/img/File-img.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReplyFileMessage'
}
</script>

<style scoped>
.my-card {
  width: 718px;
  height: 53px;
  border-radius: 10px;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
  background: #ffffff;
}
.second-card {
  width: 714px;
  height: 49px;
  background: #EEEEEE;
  border-radius: 8px;
}
</style>
