<template>
  <div class="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5 rounded-xl">
    <div>
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Albums</h1>

      <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div v-for="album in albums" :key="album.id" class="bg-white p-6 rounded-lg shadow-lg">
          <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{{album.name }}</h4>
          <div class="mt-1">
            {{album.tracks }}
            <span class="text-gray-600 text-sm">titres</span>
          </div>
          <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">Année : </span>
            <span class="text-sm text-gray-600">{{album.released }}</span>
          </div>  
        </div>

      </section>
    </div>

    <div>
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">News</h1>

      <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div v-for="item in news" :key="item.id" class="bg-white p-6 rounded-lg shadow-lg">
          <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{{item.title }}</h4>
          <div class="mt-1">
            <span class="text-gray-600 text-sm">{{item.published }}</span>
          </div>
          <div class="mt-4">
            <span class="text-sm text-gray-600">{{item.content}}</span>
          </div>  
        </div>

      </section>
      

    </div>

  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
         albums: [],
         news: [],
    }
  },
  created() {
    this.getAlbums()
    this.fetchNews()
  },
  methods: {
    getAlbums() {
      this.$axios.$get(`/albums`)
      .then(response => {
        this.albums = response
        console.log(response)
      })
      .catch( error => {
        console.log(error)
      })
    },

    fetchNews() {
      this.$axios.$get('/news')
      .then(response => {
        this.news = response
      })
      .catch( error => {
        console.log(error)
      })
    }

   }
}
</script>