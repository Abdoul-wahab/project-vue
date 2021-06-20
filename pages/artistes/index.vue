<template>
<div class="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5 rounded-xl">
  <div>
    <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Artistes</h1>
    <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">

      <div v-for="artist in artists" :key="artist.id" @click="gotoArtiste(artist.id)" class="bg-gray-900 shadow-lg rounded p-3 cursor-pointer">
        <div class="group relative">
          <img class="w-full md:w-72 block rounded" :src="artist.avatar" alt="" />
          <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            <button  v-if="$auth.loggedIn" @click.stop="like(artist.id)" class="hover:scale-110 text-white transform translate-y-3 group-hover:translate-y-0 transition opacity-0 group-hover:opacity-100 ring-0 focus:outline-none">
              <svg :class="liked ? 'text-red-600' : ''" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>

            <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
              {{ artist.likes }}
            </button>
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-white text-lg">{{ artist.name }}</h3>
          <p class="text-gray-400">{{artist.origin}}</p>
        </div>
      </div>

    </section>
  </div>
</div>
</template>


<script>

export default {

  data() {
    return {
      artists: [],
      liked: false
    }
  },

  created() {
    this.fetchArtists()
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

    like(artistId) {
      this.liked = this.liked ? false : true
      this.$axios.$post(`/likes`, {artistId: artistId, userId: 1})
      .then(response => {
        this.artists = response
        console.log(response)
      })
      .catch( error => {
        console.log(error)
      })
    },

    gotoArtiste(id) {
      this.$router.push({path: '/artistes/' + id })
    }
  }

}
</script>