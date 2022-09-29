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
  text-align: center;
}
a {
  color: inherit;
  text-decoration: none;
}
.list {
  text-align: center;
}
html {
  background-color: orange;
  text-align: center;
}
textarea {
  width: 40%;
  height: 10em;
}
button {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}

ul {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.router {
  color: aliceblue;
  text-align: center;
  text-decoration: none;
  size: 100px;
}
</style>
