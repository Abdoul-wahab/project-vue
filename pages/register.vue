<template>
 <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
            <div class="leading-loose">
                <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                    <p class="text-white font-medium text-center text-lg font-bold">Register</p>

                    <div class="mx-auto max-w-lg ">

                        <app-input
                            autocomplete="firstname"
                            name="firstname"
                            rules="required"
                            type="firstname"
                            label="Prénom"
                            placeholder="Prénom"
                        />

                        <app-input
                            divclass="mt-2"
                            autocomplete="lastname"
                            name="lastname"
                            rules="required"
                            type="lastname"
                            label="Nom"
                            placeholder="Nom"
                        />

                        <app-input
                            divclass="mt-2"
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

                        <app-input
                            divclass="mt-2"
                            autocomplete="confirm_password"
                            name="confirm_password"
                            rules="required|password"
                            type="confirm_password"
                            label="Confirmation mot de passe"
                            placeholder="Confirmation mot de passe"
                        />
                        <button class="mt-3 text-lg font-semibold
                        bg-gray-800 w-full text-white rounded-lg
                            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                            Register
                        </button>
                    </div>

                    <div class="text-sm font-semibold block py-6 flex justify-center">
                        <a href="#"
                            class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">You're already member?
                            <span class="text-black font-semibold">
                                Login
                            </span>
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