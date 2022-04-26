<template>
<div class="">
  <div class="">
    <q-btn class="btn" @click="attachMenu=!attachMenu">
      <img src="../../../assets/icon/Attach.svg">
    </q-btn>
  </div>

  <div class="">
    <q-card class="card flex justify-around items-center" v-if="attachMenu">
      <div class="">
        <q-btn class="btn-card" rounded>
          <img src="../../../assets/icon/Camera.svg">
        </q-btn>
        <div class="text">دوربین</div>
      </div>

      <div class="">
        <q-btn class="btn-card" rounded>
          <img src="../../../assets/icon/Gallery.svg">
        </q-btn>
        <div class="text">گالری</div>
      </div>

      <div class="">
        <div class="">
          <q-btn class="btn-card" rounded>
            <img src="../../../assets/icon/File.svg" @click="file=true">
          </q-btn>
          <div class="text">فایل</div>
        </div>
        <div class="">
        </div>
        </div>

      <div class="">
        <q-btn class="btn-card" rounded>
          <img src="../../../assets/icon/Contact.svg">
        </q-btn>
        <div class="text">مخاطب</div>
      </div>
    </q-card>
  </div>

  <div class="">
    <FileAttach v-if="file" @close-file="closeAttachFile"/>
  </div>
</div>
</template>

<script>
import FileAttach from 'pages/menu/list-btn-attach/FileAttach'
export default {
  name: 'AttachBtn',
  components: { FileAttach },
  data () {
    return {
      attachMenu: false,
      file: false
    }
  },
  methods: {
    closeAttachFile () {
      this.file = false
    }
  }
}
</script>

<style scoped>
.btn {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
}

.card {
  position: absolute;
  width: 264px;
  height: 92px;
  left: calc(50% - 264px/2 + 51px);
  top: 525px;
  background: #ffffff;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
  border-radius: 10px;
}

.btn-card {
  height: 50px;
  width: 50px;
  background: #E4E4E4;
  opacity: 0.5;
}
.text {
  text-align: center;
  font-size: 10px;
  color: #1e1e1e;
  opacity: 0.8;
  padding-top: 5px;
}
</style>
