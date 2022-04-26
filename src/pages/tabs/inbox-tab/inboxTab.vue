<template>
<div class="">
  <div class="bg-white">
    <div class="">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text"
            indicator-color="primary"
            align="justify"
          >
            <q-tab name="Groups" label="گروه ها" />
            <q-tab name="TwoPeople" label="دو نفره" />
            <q-tab name="AllConversation" label="تمام گفتگوها" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Groups">
              <div class="panel">
                <GroupTab/>
              </div>
            </q-tab-panel>

            <q-tab-panel name="TwoPeople">
              <div class="panel">
                <TwoPeople/>
              </div>
            </q-tab-panel>

            <q-tab-panel name="AllConversation">
              <div class="panel">
                <AllConversation/>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AllConversation from 'pages/tabs/inbox-tab/AllConversation'
import TwoPeople from 'pages/tabs/inbox-tab/TwoPeople'
import GroupTab from 'pages/tabs/inbox-tab/GroupTab'
export default {
  name: 'InboxTab',
  components: { GroupTab, TwoPeople, AllConversation },
  data () {
    return {
      tab: 'AllConversation'
    }
  }
}
</script>

<style scoped>
.text{
  font-size: 16px;
  color: #1e1e1e;
  height: 48px;
}
.panel {
  height: 560px;
}
</style>
