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
          <div class="text-lg text-gray-800">{{artist.origin}}</div>
          </div>
          <p class=" text-gray-400 max-h-40 overflow-auto">{{artist.description}}</p>
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
      <!-- <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div> -->
    </div>
    
    <div v-for="album in albums" :key="album.id" class="flex border-b border-gray-800 hover:bg-gray-800">
      <div class="p-3 w-8 flex-shrink-0">▶️</div>
      <div class="p-3 w-8 flex-shrink-0">❤️</div>
      <div class="p-3 w-full">{{album.name }}</div>
      <div class="p-3 w-full">{{album.released }}</div>
      <div class="p-3 w-full">{{album.tracks }}</div>
      <!-- <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div> -->
    </div>
  </div>

  <div class="mt-10">
    <h2 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Concerts</h2>
    <div class="flex text-gray-600">
      <div class="p-2 w-8 flex-shrink-0"></div>
      <div class="p-2 w-8 flex-shrink-0"></div>
      <div class="p-2 w-full">Lieu</div>
      <div class="p-2 w-full">Date</div>
    </div>
    
    <div v-for="concert in concerts" :key="concert.id" class="flex border-b border-gray-800 hover:bg-gray-800">
      <div class="p-3 w-8 flex-shrink-0">⏱</div>
      <div class="p-3 w-full">{{concert.name }}</div>
      <div class="p-3 w-full">{{concert.date }}</div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Artiste',
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