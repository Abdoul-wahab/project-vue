<template>
<div>

  <div class="py-3 sm:max-w-xl m-10 sm:mx-auto">
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
          <div class="text-sm text-gray-400">{{ genre ? genre.name : 'music' }}</div>
          <div class="text-lg text-gray-800">{{artist.origin ? artist.origin : artist.country}}</div>
          </div>
          <p class=" text-gray-400 max-h-40 overflow-auto">{{artist.description}}</p>
          <button class="focus:outline-none inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-gray-100 rounded-full hover:bg-gray-300">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
          </button>
      </div>

      </div>
  </div>

  <div class="mt-10">
    <h2 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Albums</h2>
    <div class="flex text-gray-600">
      <div class="p-2 w-8 flex-shrink-0"></div>
      <div class="p-2 w-8 flex-shrink-0"></div>
      <div class="p-2 w-full">Nom</div>
      <div class="p-2 w-full">Année</div>
      <div class="p-2 w-full">Nb titres</div>
      <div class="p-2 w-12 flex-shrink-0 text-right">Action</div>
    </div>
    
    <div v-for="album in albums" :key="album.id" class="flex border-b border-gray-800 hover:bg-gray-800 hover:text-white">
      <div class="p-3 w-8 flex-shrink-0">▶️</div>
      <div class="p-3 w-8 flex-shrink-0">❤️</div>
      <div class="p-3 w-full">{{album.name }}</div>
      <div class="p-3 w-full">{{album.released }}</div>
      <div class="p-3 w-full">{{album.tracks }}</div>
      <div class="p-3 w-12">
        <button class="focus:outline-none inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full hover:bg-gray-200">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <div class="mt-10">
    <h2 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Concerts</h2>
    <div class="flex text-gray-600">
      <div class="p-2 w-8 flex-shrink-0"></div>
      <div class="p-2 w-8 flex-shrink-0"></div>
      <div class="p-2 w-full">Lieu</div>
      <div class="p-2 w-full">Date</div>
      <div class="p-2 w-12 flex-shrink-0 text-right">Action</div>
    </div>
    
    <div v-for="concert in concerts" :key="concert.id" class="flex border-b border-gray-800 hover:bg-gray-800 hover:text-white">
      <div class="p-3 w-8 flex-shrink-0">⏱</div>
      <div class="p-3 w-full">{{ concert.name }}</div>
      <div class="p-3 w-full">{{ concert.date }}</div>
      <div class="p-3 w-12">
        <button class="focus:outline-none inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full hover:bg-gray-200">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        </button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import modal from '@/components/modals/modal.vue'

export default {
  name: 'Artiste',
  components: {
    modal,
  },
  data() {
    return {
         artist: [],
         genre: [],
         albums: [],
         concerts: []
    }
  },
  created() {
    this.fetchArtist()
    this.fetchGenre()
    this.getAlbums()
    this.getConcerts()
  },
  methods: {
    fetchArtist() {
      this.$axios.$get(`/artists/` + this.$route.params.id)
      .then(response => {
        this.artist = response
        console.log(response)
      })
      .catch( error => {
        console.log(error)
      })
    },

    fetchGenre() {
      this.$axios.$get('/genres')
      .then(response => {
        this.genre = response
      })
      .catch( error => {
        console.log(error)
      })
    },

    getAlbums() {
      this.$axios.$get('/albums?artistId=' + this.$route.params.id)
      .then(response => {
        this.albums = response
      })
      .catch( error => {
        console.log(error)
      })
    },

    getConcerts() {
      this.$axios.$get('/concerts?artistId=' + this.$route.params.id)
      .then(response => {
        this.concerts = response
      })
      .catch( error => {
        console.log(error)
      })
    }

   }
}
</script>