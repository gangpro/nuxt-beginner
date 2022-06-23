<template>
    <div>
      <!-- <h1> {{ title }} </h1> -->
      <Title :title="title" />
      <nuxt-link to="/">Home</nuxt-link>
      <!-- <img src="/favicon.ico" alt=""> -->
    </div>
</template>

<script>
export default {
    name: "About",
    layout: 'auth',
    data() {
        return {
            title: "About.,"
        };
    }
}
</script>

<style>

</style>
