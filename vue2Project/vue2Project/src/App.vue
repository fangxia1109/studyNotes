<template>
  <div id="app">
    <div>
      <!-- <router-link :to="{ path: '/helloWorld', query: { text: text } }" class="home"> -->
      <!-- <button @click="toHelloWorld">HelloWorld</button> -->
      <!-- </router-link> -->
      <!-- <router-link
        :to="{ name: 'About', params: { text: text } }"
        class="about"
      > -->
      <!-- <button @click="toAbout">about</button> -->
      <!-- </router-link> -->
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "小滴"
    };
  },
  methods: {
    toHelloWorld() {
      this.$router.push({
        path: "/helloWorld",
        query: {
          text: this.text
        }
      });
    },
    toAbout() {
      this.$router.push({
        name: "About",
        params: {
          text: this.text
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
