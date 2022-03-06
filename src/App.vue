<template>
  <div id="app">
    <SiteNav />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import SiteNav from '@/components/SiteNav'

export default {
  name: 'App',
  components: {
    SiteNav,
  },
  props: {
  },
  created() {
    // axios.get('http://localhost:3000/posts')
    //   .then(res => {
    //     console.log('res', res)
    //   })
  },
  methods: {
  },
}
</script>