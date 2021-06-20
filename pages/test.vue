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
                            $nuxt.$route.path === '/test'
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
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">
                    <button
                      class="bg-gray-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <!-- <span class="sr-only">View notifications</span> -->
                      <svg class="h-6 w-6" x-description="Heroicon name: outline/bell"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                        </path>
                      </svg>
                    </button>


                    <div class="ml-3 relative">
                      <div>
                        <button type="button"
                          class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          id="user-menu" aria-expanded="false" @click="openUserMenu()" @keydown.escape.stop="open = false" aria-haspopup="true"
                          x-bind:aria-expanded="open">
                          <span class="sr-only">Open user menu</span>
                          <img class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt="">
                        </button>
                      </div>

                    <div x-description="Dropdown menu, show/hide based on menu state." x-show="open"
                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        :class="open ? '' : 'invisible'"
                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">Your Profile</a>

                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">Settings</a>

                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">Sign out</a>

                    </div>

                    </div>
                  </div>
                </div>

              </div>
          </div>

        </nav>
        
      </div>

      <main class="-mt-32">
        <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 mt-20">
          <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div class="border-2 border-dashed border-gray-200 rounded-lg h-96">
                <Nuxt />
            </div>
          </div>
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

  methods: {
      openUserMenu() {
          this.open = this.open ? false : true
      }
  }

}
</script>