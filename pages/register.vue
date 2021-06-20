<template>
 <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
            <div class="leading-loose">
                <form @submit.prevent="register()" class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                    <p class="text-white font-medium text-center text-lg font-bold">Créer un compte</p>

                    <p v-if="api_errors" class="mt-2 text-sm text-red-600">
                        {{ api_errors }}
                    </p>

                    <div class="mx-auto max-w-lg ">

                        <app-input
                            autocomplete="firstname"
                            name="firstname"
                            v-model="form.firstname"
                            rules="required"
                            type="firstname"
                            label="Prénom"
                            placeholder="Prénom"
                        />

                        <app-input
                            divclass="mt-2"
                            autocomplete="lastname"
                            name="lastname"
                            v-model="form.lastname"
                            rules="required"
                            type="lastname"
                            label="Nom"
                            placeholder="Nom"
                        />

                        <app-input
                            divclass="mt-2"
                            autocomplete="email"
                            name="email"
                            v-model="form.email"
                            rules="required|email"
                            type="email"
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

                        <app-input
                            divclass="mt-2"
                            autocomplete="confirm_password"
                            name="confirm_password"
                            rules="required|password"
                            type="password"
                            label="Confirmation mot de passe"
                            placeholder="Confirmation mot de passe"
                        />
                        <button class="mt-3 text-lg font-semibold
                        bg-gray-900 hover:bg-gray-800 w-full text-white rounded-lg
                            px-6 py-3 block shadow-xl">
                            Créer un compte
                        </button>
                    </div>

                    <div class="text-sm font-semibold block py-6 flex justify-center">
                        <nuxt-link to="/login"
                            class="text-black font-normal border-b-1 border-gray-200 hover:text-gray-800">Déjà membre ?
                            <span class="text-black font-semibold">
                                Connexion
                            </span>
                        </nuxt-link>
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
         user: null,
         api_errors: null
         
    }
  },
  methods: {
    register() {
        console.log(this.form)
        this.$axios.$post(`/register`, this.form)
        .then( () => this.$router.push({path: '/'}) )
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