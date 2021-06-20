<template>
  <div class="grid  min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5 rounded-xl">
    <div>
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Concerts</h1>
        <div class="mt-10">
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
    </div>

  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
         albums: [],
    }
  },
  created() {
    this.getAlbums()
  },
  methods: {
    getAlbums() {
      this.$axios.$get('/albums')
      .then(response => {
        this.albums = response
      })
      .catch( error => {
        console.log(error)
      })
    },

   }
}
</script>