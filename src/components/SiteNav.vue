<template>
  <header class="site-nav">
    <div>
      <a
        class="-logo"
        href="/"
      >
        <img src="/img/logo/greenBlack2.svg" />
        <h1>Lee Stevens</h1>
      </a>
      <nav>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SiteNav',
  props: {
    // xxxx: {
    //   type: Object,
    //   default: ()=>new Object,
    // },
  },
  created() {
  },
  methods: {
  },
}
</script>