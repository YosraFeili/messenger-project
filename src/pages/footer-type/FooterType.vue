<template>
  <div class="">
    <div class="footer flex justify-center space-x-5 items-center">
      <div class="">
        <q-btn class="btn-record" v-if="recordBtn" @mousedown="record">
          <img src="../../assets/icon/Voice3.svg">
        </q-btn>

        <q-btn class="red-btn-record" v-if="redBtnRecord">
          <img src="../../assets/icon/Voice3.svg">
        </q-btn>

        <q-btn class="btn-record" v-if="sendBtn">
          <img src="../../assets/icon/Send.svg">
        </q-btn>
      </div>
      <div class="">
        <input class="input text-right pr-3" :style="(shareFile)? 'width:186px;' : ''" v-model="ph" placeholder="...اینجابنویسید" @keydown="changeBtn" v-if="typeInput"/>
      </div>
      <div class="input" :style="(shareFile)? 'width:186px;' : ''" v-if="recordInput">
        <q-input label-color="red" v-model="time" label="انصراف و حذف">
          <template v-slot:append>
            <q-icon name="event" color="red"/>
          </template>
        </q-input>
      </div>
      <div class="">
        <AttachBtn/>
      </div>
      <div class="">
        <q-btn class="btn">
          <img src="../../assets/icon/Stiker.svg">
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>

import AttachBtn from 'pages/menu/list-btn-attach/AttachBtn'

export default {
  name: 'FooterType',
  components: { AttachBtn },
  props: ['shareFile'],
  data () {
    return {
      ph: '',
      time: '',
      dense: true,
      sendBtn: false,
      recordBtn: true,
      redBtnRecord: false,
      recordInput: false,
      typeInput: true
    }
  },
  methods: {
    changeBtn () {
      if (this.ph.length >= 1) {
        this.sendBtn = true
        this.recordBtn = false
      }
      if (this.ph.length <= 0) {
        this.sendBtn = false
        this.recordBtn = true
      }
    },
    record () {
      this.redBtnRecord = true
      this.recordBtn = false
      this.recordInput = true
      this.typeInput = false
    }
  }
}
</script>

<style scoped>
.footer {
  background: #ffffff;
  height: 68px;
}

.btn {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
}

.btn-record {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #0055ff;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
}

.input {
  height: 48px;
  width: 546px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
}

.red-btn-record {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #FF0000;
  box-shadow: 0px 1.5px 4px rgba(81, 81, 81, 0.25);
}
</style>
