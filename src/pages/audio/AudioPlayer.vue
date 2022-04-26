<template>
  <div class="">
    <div class="">
      <q-card class="my-card flex items-center ml-5">
        <div class="">
          <q-btn class="btn ml-1">
            <img src="../../assets/icon/Play.svg">
          </q-btn>
        </div>
        <div class="flex space-x-20">
          <div class="flex space-x-1 ml-1">
            <div class="text mb-8">MusicName</div>
            <div class="text">singerName</div>
          </div>
          <div class="flex items-start mr-5">
            <img src="../../assets/icon/Song-icon.svg">
          </div>
        </div>
          <q-separator dark inset/>
        <div class="flex space-x-32 -mt-5">
          <div class="text ml-9">01:33-02:33</div>
          <div class="text">2.5MB</div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data () {
    return {}
  }
}
</script>

<style scoped>
.my-card {
  width: 292px;
  height: 63px;
  background: #BDD3FF;
}

.btn {
  background: #0055ff;
  border-radius: 8px;
  width: 59px;
  height: 59px;
}
.text{
  font-size: 10px;
}
</style>
