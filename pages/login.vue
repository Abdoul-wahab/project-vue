<template>
    <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
        <div class="leading-loose">
            <form @submit.prevent="login()" class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                <p class="text-white font-medium text-center text-lg font-bold">Se connecter</p>
                <p v-if="api_errors" class="mt-2 text-sm text-red-600">
                    {{ api_errors }}
                </p>
                <app-input
                    autocomplete="email"
                    name="email"
                    rules="required|email"
                    type="email"
                    v-model="form.email"
                    label="Adresse mail"
                    placeholder="Ex: acme.test@gmail.com"
                />
                <app-input
                    divclass="mt-2"
                    autocomplete="password"
                    name="password"
                    v-model="form.password"
                    rules="required|password"
                    type="password"
                    label="Mot de passe"
                    placeholder="Mot de passe"
                />

                <div class="mt-4 items-center flex justify-between">
                    <button class="px-4 py-1 text-white text-lg font-semibold tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit">Connexion</button>
                    <nuxt-link class="text-black font-normal border-b-1 border-gray-200 hover:text-gray-800"
                    to="/register">Pas de compte ?</nuxt-link>
                </div>

            </form>

        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
         form: {},
         api_errors: null
    }
  },
  methods: {
      login() {
          console.log(this.form)
          this.$auth.loginWith('local', { data: this.form })
          .then(() => this.$router.push({path: '/'}))
          .catch( error => { this.api_errors = error.response ? error.response.data : '' } )
      }
  }
}
</script>

<style>
  .login{
  
  background: url('https://research.fb.com/wp-content/uploads/2018/05/music-hero2.jpg');
 
 
  /* background: url('http://bit.ly/2gPLxZ4'); */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>