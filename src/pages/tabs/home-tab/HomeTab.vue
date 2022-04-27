<template>
  <div class="">
    <div class="" :class="(openShareFile)? 'hidden' : ''">
      <div class="header flex justify-between">
        <div class="flex space-x-5 mt-3">
          <div class="ml-5 cursor-pointer">
            <img src="../../../assets/icon/Pin.svg">
          </div>
          <div class="cursor-pointer">
            <img src="../../../assets/icon/Sound.svg">
          </div>
          <div class="cursor-pointer">
            <img src="../../../assets/icon/Close.svg">
          </div>
        </div>
        <div class="mr-5 mt-3">
          <img src="../../../assets/icon/CloseSquare.svg" class="cursor-pointer" @click="closeShare">
        </div>
      </div>

      <div class="-mt-10">
        <q-list class="border-b-2 border-gray-100" padding>
          <q-item>
            <q-item-section>
              <q-item-label class="text-right text-white cursor-default">{{ data.name }}</q-item-label>
              <q-item-label class="text-right cursor-default" caption>{{ data.lastSeen }}</q-item-label>
            </q-item-section>

            <q-item-section top avatar>
              <q-avatar>
                <img :src="data.image" class="cursor-default">
              </q-avatar>
            </q-item-section>

          </q-item>
        </q-list>
      </div>

      <div class="share-file bg-blue-200 flex justify-between items-center cursor-pointer" @click="openShareFile=true">
        <div class="ml-5 text-subtitle2">23</div>
        <div class="mr-5 text-primary text-subtitle2">فایل های اشتراکی</div>
      </div>

      <div class="">
        <div class="Joint-groups flex justify-between items-center cursor-pointer">
          <div class="ml-5 text-caption">3</div>
          <div class="mr-5 text-caption">گروه های مشترک</div>
        </div>
        <div class="">
          <div class="cursor-pointer" v-for="(group, i) in groups" :key="i">
            <q-list class="border-b-2 border-gray-100" padding>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-right">{{group.nameGroup}}</q-item-label>
                  <q-item-label class="text-right" caption>{{ group.name }}</q-item-label>
                </q-item-section>

                <q-item-section top avatar>
                  <q-avatar>
                    <img :src="group.image">
                  </q-avatar>
                </q-item-section>

              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>

    <div class="" v-if="openShareFile">
      <ShareFile @back="backToProfile"/>
    </div>
  </div>
</template>

<script>
import ShareFile from 'pages/tabs/home-tab/ShareFile'
import { chatList } from 'app/src'
export default {
  name: 'HomeTab',
  components: { ShareFile },
  props: ['data'],
  data () {
    return {
      openShareFile: false,
      groups: (chatList.group)
    }
  },
  methods: {
    closeShare () {
      this.$emit('close-share')
    },
    backToProfile () {
      this.openShareFile = false
    }
  }
}
</script>

<style scoped>
.header {
  background: #333333;
  height: 120px;
}

.share-file {
  height: 48px;
}

.Joint-groups {
  height: 24px;
  background: #D8D8D8;
}
</style>
