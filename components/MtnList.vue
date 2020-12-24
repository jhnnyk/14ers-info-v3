<template>
  <div class="mtn-list">
    <ul>
      <li v-for="(range, index) in mtnsByRange" :key="index">
        <h3>{{ range.name }}</h3>
        <ul>
          <li v-for="mtn in range.mtns" :key="mtn.slug">
            <nuxt-link :to="{ name: 'slug', params: { ...mtn } }">
              {{ mtn.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('mtns', ['mtnsByRange']),
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
