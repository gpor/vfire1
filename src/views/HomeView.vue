<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <JsonServerTest msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import JsonServerTest from '@/components/JsonServerTest.vue'

export default {
  name: 'HomeView',
  components: {
    JsonServerTest,
  },
}
</script>
