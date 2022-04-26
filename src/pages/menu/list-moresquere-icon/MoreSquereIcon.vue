<template>
  <div class="">
    <div class="">
      <img src="../../../assets/icon/MoreSquare.svg" class="ml-5 cursor-pointer" @click="menuMoreSquere=true">
    </div>

    <div class="menu bg-white shadow-5 rounded-borders q-pa-sm" v-if="menuMoreSquere">
      <q-list @click="menuMoreSquere=false">
        <q-item clickable @click="popUpBlock=true">
          <q-item-section>
            <div class="">
              بلاک
            </div>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable>
          <q-item-section>
            <div class="">بی صدا</div>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable>
          <q-item-section>
            <div class="">حذف</div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="bg-popUp flex justify-center items-center" v-if="popUpBlock" @click="popUpBlock=false">
      <Block/>
    </div>
  </div>
</template>

<script>
import Block from 'pages/menu/list-moresquere-icon/Block'

export default {
  name: 'MoreSquereIcon',
  components: { Block },
  data () {
    return {
      menuMoreSquere: false,
      popUpBlock: false
    }
  }
}
</script>

<style scoped>
.menu {
  width: 146px;
  position: absolute;
  left: 18px;
  top: 18px;
  background: #ffffff;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 1;
}

.bg-popUp {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(30, 30, 30, 0.6);
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
</style>
