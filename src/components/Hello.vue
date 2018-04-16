<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <child v-show="show[index]" v-for="(item, index) in list" :key="index"></child>
    <button @click="filterData">点击</button>
  </div>
</template>

<script>
import child from './child.vue'

export default {
  name: 'hello',
  components: {
    child
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [12, 33, 44],
      boo: false,
      show: []
    }
  },
  methods: {
    filterData () {
      this.$set(this.show, 0, !this.show[0])
    }
  },
  created () {
    this.list.map((item) => {
      this.show.push(item > 22)
    })
    // setInterval(() => {
    //   this.$set(this.show, 0, !this.show[0])
    // }, 5000)
    this.store.commit('addCount')
    console.log(this.store)
    console.log(this.$store)
    console.log(this.$http)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.show {
  display: none
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
