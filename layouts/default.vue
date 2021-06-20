<template>
<div class="">

    <div>
      <div class="bg-gray-800 pb-32">
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">


              <div class="flex items-center justify-between h-16 px-4 sm:px-0">
                <div class="flex items-center">
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">

                        <nuxt-link href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium" to="/"
                            :class="
                            $nuxt.$route.path === '/'
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            ">
                            Accueil
                        </nuxt-link>


                        <nuxt-link href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium" to="/news"
                            :class="
                            $nuxt.$route.path === '/news'
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            ">
                            News
                        </nuxt-link>

                        <nuxt-link href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium" to="/concerts"
                            :class="
                            $nuxt.$route.path === '/concerts'
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            ">
                            Concerts
                        </nuxt-link>

                        <nuxt-link href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium" to="/artistes"
                            :class="
                            $nuxt.$route.path === '/artistes'
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            ">
                            Artistes/Groupes
                        </nuxt-link>

                    </div>
                  </div>
                </div>
                <div v-if="$auth.loggedIn" class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">

                    <div class="ml-3 relative">
                      <div>
                        <button type="button"
                          class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          id="user-menu" aria-expanded="false" @click="openUserMenu()" @keydown.escape.stop="open = false" aria-haspopup="true"
                          x-bind:aria-expanded="open">
                          <span class="sr-only">Open user menu</span>
                          <img class="h-8 w-8 rounded-full"
                            src="data:image/png;base64,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"
                            alt="">
                        </button>
                      </div>

                    <div x-description="Dropdown menu, show/hide based on menu state." x-show="open"
                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        :class="open ? '' : 'invisible'"
                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">Profile</a>

                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">Réglage</a>

                        <a @click.prevent="$auth.logout()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">Déconnexion</a>

                    </div>

                    </div>
                  </div>
                </div>
                <div v-else class="ml-4 flex items-center md:ml-6">
                  <nuxt-link href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/login">
                    Connexion
                  </nuxt-link>
                </div>

              </div>
          </div>

        </nav>
        
      </div>

      <main class="-mt-32">
        <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 mt-20">
          <Nuxt />
        </div>
      </main>
    </div>

  </div>
</template>


<script>

export default {

  data() {
    return {
      open: false,
    }
  },

  // mounted () {
  //   console.log(this.$auth.loggedIn)
  // },

  methods: {
      openUserMenu() {
        this.open = this.open ? false : true
      },

      logout() {

      }
  }

}
</script>