<template>
  <div id="app">
    <TitleBar />
    <main>
      <MtnList />
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import MtnList from '@/components/MtnList'

export default {
  components: {
    TitleBar,
    MtnList,
  },

  watch: {
    $route() {
      this.$store.dispatch('mtns/setCurrentMtn', this.$route.params.slug)
    },
  },

  async created() {
    await this.$store.dispatch('mtns/getMtns')

    if (this.$route.params.slug) {
      this.$store.dispatch('mtns/setCurrentMtn', this.$route.params.slug)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  display: flex;
  flex-direction: row;
}

.mtn-info {
  width: 75%;
}

.mtn-list {
  width: 25%;
}
</style>
