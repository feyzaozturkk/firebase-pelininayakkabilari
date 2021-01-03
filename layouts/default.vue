<template>
  <v-app>
    <Arama/>
    <Navbar/>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Arama from "../components/default/Arama";
import Navbar from "../components/default/Ayakkabiturleri";
import cookie from 'js-cookie'

export default {
  components: {Navbar, Arama},
  created() {
    this.setAuth({user: cookie.getJSON('userData') ? cookie.getJSON('userData')  : null, loggedIn: cookie.getJSON('loggedIn')})
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
