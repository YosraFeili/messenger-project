<template>
  <div class="">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...',
          'I just feel like typing a really, really, REALLY long message to annoy you...'
        ]"
          size="6"
          stamp="4 minutes ago"
          text-color="white"
          bg-color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox'
}
</script>

<style lang="sass" scoped>
.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
