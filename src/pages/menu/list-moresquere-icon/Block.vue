<template>
  <div class="">
    <div class="blockCard">
      <q-card-section class="mt-5 mr-3">
        <div class="text">میخواهید محمد را بلاک کنید؟</div>
      </q-card-section>
      <q-card-actions class="ml-3">
        <q-btn flat class="text-btn text-red-6">بلاک</q-btn>
        <q-btn flat class="text-btn text-grey-6">انصراف</q-btn>
      </q-card-actions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block'
}
</script>

<style scoped>

.blockCard {
  width: 349px;
  height: 155px;
  left: 546px;
  top: 352px;
  background: #ffffff;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.text{
  font-size: 13px;
  text-align: right;
  color: #1e1e1e;
}
.text-btn {
  font-size: 13px;
}
</style>
