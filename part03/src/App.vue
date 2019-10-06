<template>
  <div id="app">
    <h1>APP</h1>
    <input type="text" placeholder="URL..." v-model="state.target.url"><br>
    <input type="text" placeholder="TOKEN..." v-model="state.target.token"><br>
    <Search />
    <Result v-bind:isResult="isResult"/>
    <button @click="isResult = !isResult">SUBMIT</button>
  </div>
</template>

<script>
import store from './store'
import Search from './components/Search.vue'
import Result from './components/Result.vue'

export default {
  name: 'app',
  components: {
    Search,
    Result
  },
  data () {
    return {
      state: store.state,
      isResult: false
    }
  },
  created () {
    store.setTokenListAction([
      'sample01',
      'sample02',
      'sample03',
      'sample04',
      'sample05',
      'test0001',
      'test0002',
      'test0003',
      'test0004'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
