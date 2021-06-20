<template>
    <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
        <div class="leading-loose">
            <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>

                <app-input
                    autocomplete="email"
                    name="email"
                    rules="required|email"
                    type="email"
                    label="Adresse mail"
                    placeholder="Ex: acme.test@gmail.com"
                />
                <app-input
                    divclass="mt-2"
                    autocomplete="password"
                    name="password"
                    rules="required|password"
                    type="password"
                    label="Mot de passe"
                    placeholder="Mot de passe"
                />

                <div class="mt-4 items-center flex justify-between">
                    <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit">Login</button>
                    <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                    href="#">Pas de compte ?</a>
                </div>
                <div class="text-center">
                    <a class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                        Créer un compte
                    </a>
                </div>

            </form>

        </div>
        </div>
    </div>
    </div>
</template>

<style>
  .login{
  
  background: url('https://research.fb.com/wp-content/uploads/2018/05/music-hero2.jpg');
 
 
  /* background: url('http://bit.ly/2gPLxZ4'); */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>