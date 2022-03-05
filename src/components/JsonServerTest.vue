<template>
  <div class="json-server-test">
    <button
      @click="add"
    >
      add
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'JsonServerTest',
  props: {
    xxxx: {
      type: Object,
      default: ()=>{return{}},
    },
  },
  created() {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        console.log('res', res)
      })
  },
  methods: {
    add() {
      console.log('add')
    },
  },
}
</script>