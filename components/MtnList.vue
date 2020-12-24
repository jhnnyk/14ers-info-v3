<template>
  <div class="mtn-list">
    <ul>
      <li v-for="mtn in mtns" :key="mtn.slug">
        {{ mtn.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    mtns() {
      return this.$store.state.mtns.all
    },
  },
}
</script>

<style scoped>
li {
  list-style-type: none;
}

li h3 {
  margin-bottom: 0;
}

li ul {
  padding-left: 15px;
}
</style>
