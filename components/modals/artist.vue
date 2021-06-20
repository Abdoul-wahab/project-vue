<template>
    <form @submit.prevent="editArtist()">
      <div class="flex flex-col mx-auto rounded-lg border border-gray-300 shadow-xl">
        
        <div class="flex flex-col px-6 py-5 bg-gray-50">
          
          <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div class="w-full sm:w-1/2">
              <p class="mb-2 font-semibold text-gray-700">Nom</p>
              <input
                type="text"
                v-model="artist.name"
                placeholder="Nom"
                class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id=""
              />
            </div>
            <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p class="mb-2 font-semibold text-gray-700">Pays</p>
              <input
                v-model="artist.origin"
                type="text"
                placeholder="Pays"
                class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id=""
              />
            </div>
          </div>

          <p class="mb-2 font-semibold text-gray-700">Description</p>
          <textarea
            type="text"
            v-model="artist.description"
            placeholder="Description..."
            class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
            id=""
          ></textarea>

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
    artist: {
      type: Object,
      required: true,
      default: {},
    }
  },
  methods: {
    editArtist(){
        this.$axios.$put('/artists/' + this.artist.id, this.artist)
        .then(() => {
            this.$emit('close')
        })
        .catch( error => { console.log(error) } )
    }
  },
};
</script>