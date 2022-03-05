<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getUsers } from './db/users.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
  },
}
</script>