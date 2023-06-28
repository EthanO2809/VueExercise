<template>
<div class="lin">
  <div class="home">
    <img alt="Vue logo" src="https://i.postimg.cc/wjJmj24j/intmYM.webp" class="hero">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>


.hero {
  margin: 0;
  padding: 0;
  width: 100%;
  background-attachment: fixed;
}

</style>
