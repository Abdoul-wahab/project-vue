<template>
    <form @submit.prevent="editConcert()">
      <div class="flex flex-col mx-auto rounded-lg border border-gray-300 shadow-xl">
        
        <div class="flex flex-col px-6 py-5 bg-gray-50">
          
          <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div class="w-full sm:w-1/2">
              <p class="mb-2 font-semibold text-gray-700">Nom</p>
              <input
                type="text"
                v-model="concert.name"
                placeholder="Nom"
                class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id=""
              />
            </div>
            <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p class="mb-2 font-semibold text-gray-700">Date</p>
              <input
                v-model="concert.date"
                type="text"
                placeholder="Pays"
                class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id=""
              />
            </div>
          </div>

          <p class="mb-2 font-semibold text-gray-700">Artiste</p>
          <select 
                v-model="concert.artistId"
                class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                <option v-for="artist in artists" :key="artist.id" :value="artist.id">{{ artist.name }}</option>
            </select>

        </div>
        <div
          class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <a @click.prevent="$emit('close')" class="font-semibold text-gray-600">Annuler</a>
          <button class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
            Modifier
          </button>
        </div>
      </div>
    </form>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    concert: {
      type: Object,
      required: true,
      default: {},
    }
  },
  created() {
    this.fetchArtist()
  },
  data() {
    return {
        artists: [],
    }
  },
  methods: {
    editConcert(){
        this.$axios.$put('/concerts/' + this.concert.id, this.concert)
        .then(() => {
            this.$emit('close')
        })
        .catch( error => { console.log(error) } )
    },

    fetchArtist() {
      this.$axios.$get(`/artists`)
      .then(response => {
        this.artists = response
        console.log(response)
      })
      .catch( error => {
        console.log(error)
      })
    },

  },
};
</script>