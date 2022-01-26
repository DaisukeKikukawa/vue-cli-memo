<template>
  <div id="app">
    <h1>My Memos</h1>
    <article>
      <ul>
        <li v-for="memo in memos" :key="memo.id" class="list">
          <router-link :to="{name: 'Edit', params: { id: memo.id }}">{{ memo.body.split("\n")[0] }}</router-link>
        </li>
      </ul>
      <router-link to="/new" class="router"><button>追加</button></router-link>
    </article>
    <aside>
      <router-view/>
    </aside>
  </div>
</template>

<script>
export default {
  computed: {
    memos: function() {
      return this.$store.state.memos;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
