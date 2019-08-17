# storeパターン
Vueで複数のコンポーネントで同じ値を参照したい場合、「this.$root.$data」などで親コンポーネントにアクセスして値を取得してくるのは無理がくる。  

その際に使えるのが「Vuex」という状態管理ライブラリ  
  
しかし、そのライブラリを入れるほどでもない小さい実装の場合、状態管理を自前で用意した方が良い場合がある、その際に参考になるstoreパターンを実装する  

## DEMO
* https://yuki-sakaguchi.github.io/vue-store/part01/
* https://yuki-sakaguchi.github.io/vue-store/part02/

## 参考
https://jp.vuejs.org/v2/guide/state-management.html  
  
ここにも書いてあるが、そもそもdataで参照するオブジェクトを共有すれば、その値が変わるたびに他のコンポーネントも更新されるようになっている。  
  
```
const sourceOfTruth = {}

const vmA = new Vue({
  data: sourceOfTruth
})

const vmB = new Vue({
  data: sourceOfTruth
})
```

この場合、`sourceOfTruth`オブジェクトが変更されるたび、vmAもvmBも変更される。  
だからと言って好き勝手sourceOfTruthオブジェクトを変更すると管理が煩雑になり、バグを含みやすくなる。  
それを解決するためにstoreパターンが開発された。  
  
storeパターンでは複数コンポーネントで参照されるオブジェクトの値を変更する関数もそのオブジェクト自体に持たせるようにする  

```
var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
```

こんな感じでstore自体に自分を変更する用の関数を用意して、これを用いて値を変更する。  
それ以外の変更はしないルールを守ることでstoreの変更が一定のルールのみになり、バグが含まれづらくなる