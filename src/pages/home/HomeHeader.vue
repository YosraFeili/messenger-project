<template>
<div class="">
  <div class="header flex justify-between items-center shadow-sm" :class="(searchHome)? 'hidden': ''">
    <div class="flex space-x-5">
      <div class="">
        <MoreSquereIcon/>
      </div>
      <div class="cursor-pointer">
        <img src="../../assets/icon/Search-dark.svg" @click="searchHome=true">
      </div>
    </div>
    <div class="mr-5">
      <div class="">
        <q-list class="">
          <q-item>
            <q-item-section>
              <q-item-label class="text">{{data.name}}</q-item-label>
              <q-item-label class="text-caption" caption>{{data.lastSeen}}</q-item-label>
            </q-item-section>

            <q-item-section top avatar>
              <q-avatar>
                <img :src="data.avatar" class="cursor-pointer" @click="openShareFile">
              </q-avatar>
            </q-item-section>

          </q-item>
        </q-list>
      </div>
    </div>
  </div>

  <div class="">
    <SearchHome v-if="searchHome" @searchHome="closeSearchHomeIcon"/>
  </div>
</div>
</template>

<script>
import MoreSquereIcon from 'pages/menu/list-moresquere-icon/MoreSquereIcon'
import SearchHome from 'pages/home/SearchHome'
export default {
  name: 'HomeHeader',
  components: { SearchHome, MoreSquereIcon },
  props: ['data'],
  data () {
    return {
      searchHome: false
    }
  },
  methods: {
    closeSearchHomeIcon () {
      this.searchHome = false
    },
    openShareFile () {
      this.$emit('openShare')
    }
  }
}
</script>

<style scoped>
.header {
  height: 57px;
  background: #ffffff;
}
.text {
  font-size: 12px;
  text-align: right;
  color: #1e1e1e;
}
.text-caption {
  font-size: 10px;
  text-align: right;
  color: #1e1e1e;
}
</style>
