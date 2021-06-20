<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  
        <div v-for="artist in artists" :key="artist.id" class="py-3 sm:max-w-xl m-10 sm:mx-auto">
            <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
            <div class="h-48 overflow-visible w-1/2">
                <img class="rounded-3xl shadow-lg" :src="artist.avatar" alt="">
            </div>
            <div class="flex flex-col w-1/2 space-y-4">
                <div class="flex justify-between items-start">
                <h2 class="text-3xl font-bold">{{ artist.name }}</h2>
                <div class="bg-yellow-400 font-bold rounded-xl p-2">{{ artist.likes }}</div>
                </div>
                <div>
                <div class="text-sm text-gray-400">{{ fetchArtistGenre(artist.genreId) }}</div>
                <div class="text-lg text-gray-800">2019</div>
                </div>
                <p class=" text-gray-400 max-h-40 overflow-auto">{{artist.description}}</p>
            </div>

            </div>
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