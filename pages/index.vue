<template>
  <!-- <Tutorial/> -->
  <div>
    <!-- <h1>Home!</h1> -->
    <Title title="Home" />

    <!-- <a href="/about"></a> -->
    <nuxt-link to="/about">About</nuxt-link>

    <a href="https://github.com/gangpro" target="_blank" rel="noopener noreferrer">Github</a>

    {{ $store.state.title }}
    <button @click="increment">누르면 증가</button>
    <button @click="decrement">누르면 감소</button>
    {{ $store.state.cnt }}
  </div>
</template>

<script>
export default {
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
}
</script>
