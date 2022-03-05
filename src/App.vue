<template>
  <div id="app">
    <h1>Lee Stevens</h1>
    <h2>I create smooth user experiences</h2>
    <p>The quick brown fox jumps over the lazy dog. I quickly packed my lunch box for the zoo with grapes, veal, and quince jam sandwiches.</p>
    <JsonServerTest msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import JsonServerTest from './components/JsonServerTest.vue'
import { getUsers } from './db/users.js'

export default {
  name: 'App',
  components: {
    JsonServerTest,
  },
  created() {
  },
}
</script>