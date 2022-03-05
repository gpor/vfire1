<template>
  <div class="xxxxx">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
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
}
</script>
