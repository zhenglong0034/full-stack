<template>
  <div v-show="which">12121</div>
</template>
<script>
  export default {
    data () {
      return {
        which: true
      }
    },
    created () {
      setTimeout(() => {
        this.which = false
      }, 1000)
      setTimeout(() => {
        this.which = true
      }, 3000)
    }
  }
</script>
