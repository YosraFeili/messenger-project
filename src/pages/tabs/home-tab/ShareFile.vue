<template>
    <div class="">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-card class="card-title flex justify-around items-center">
            <div class=""></div>
            <div class="text-title">فایل های اشتراکی</div>
            <div class="flex justify-end items-center">
              <img src="../../../assets/icon/Arrow-Left(1).svg" class="cursor-pointer" @click="back">
            </div>
          </q-card>
          <q-separator/>
          <q-tabs
            v-model="tab"
            dense
            class="text"
            indicator-color="primary"
            align="justify"
          >
            <q-tab name="Link" label="لینک"/>
            <q-tab name="File" label="فایل"/>
            <q-tab name="Media" label="مدیا"/>
          </q-tabs>

          <q-separator/>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Link">
              <div class="panel">
                <Link/>
              </div>
            </q-tab-panel>

            <q-tab-panel name="File">
              <div class="panel">
                <File/>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Media">
              <div class="panel">
                <MediaTab/>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
</template>

<script>
import MediaTab from 'pages/tabs/home-tab/MediaTab'
import Link from 'pages/tabs/home-tab/Link'
import File from 'pages/tabs/home-tab/File'
export default {
  name: 'ShareFile',
  components: { File, Link, MediaTab },
  data () {
    return {
      tab: 'Media'
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 12px;
  color: #1e1e1e;
  height: 48px;
}

.panel {
  height: 560px;
}

.card-title {
  height: 57px;
  background: #ffffff;
}

.text-title {
  font-size: 16px;
  color: #1e1e1e;
  text-align: center;
}
</style>
