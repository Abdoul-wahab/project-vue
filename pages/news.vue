<template>
  <div class="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5 rounded-xl">
    <div>
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">News</h1>
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">

      </section>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
         artists: [],
         genres: [],
    }
  },
  created() {
    this.fetchArtists()
    this.fetchGenres()
  },
  methods: {
    fetchArtists() {
      this.$axios.$get(`/artists`)
      .then(response => {
        this.artists = response
        console.log(response)
      })
      .catch( error => {
        console.log(error)
      })
    },

    fetchGenres() {
      this.$axios.$get('/genres')
      .then(response => {
        this.genres = response
      })
      .catch( error => {
        console.log(error)
      })
    },

    fetchArtistGenre(id) {
      return this.genres[id] ? this.genres[id].name : 'music'
    }

   }
}
</script>