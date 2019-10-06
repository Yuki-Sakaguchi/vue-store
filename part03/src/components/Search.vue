<template>
  <div class="search" v-if="searchResultList.length > 0">
    <h1>Search</h1>
    <ul>
      <li v-for="item in searchResultList" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Search',
  data () {
    return {
      searchResultList: [],
      state: store.state
    }
  },
  watch: {
    "state.target.url" () {
      if (this.state.target.url) {
        this.searchResultList = this.state.target.tokenList.filter((val) => val.indexOf(this.state.target.url) >= 0)
      } else {
        this.searchResultList = []
      }
    }
  }
}
</script>

<style scoped>

</style>
