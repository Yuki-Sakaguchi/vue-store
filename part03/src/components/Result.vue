<template>
  <div class="result" v-if="isResult">
    <h1>Result</h1>
    <p v-if="result != ''">{{ result }}</p>
    <p v-else>結果は見つかりませんでした</p>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Result',
  props: [ 'isResult' ],
  data () {
    return {
      result: '',
      state: store.state
    }
  },
  watch: {
    "state.target.url" () {
      this.result = store.state.target.url + ' ' + store.state.target.token
    },
    "state.target.token" () {
      this.result = store.state.target.url + ' ' + store.state.target.token
    }
  }
}
</script>

<style scoped>

</style>
