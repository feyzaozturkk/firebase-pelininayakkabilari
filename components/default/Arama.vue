<template>
  <v-card class="elevation-12 m" color="#FFFFF" height="200px">
    <v-row align="center" justify="center">
      <v-col col="25">
        <div class="d-flex flex-row">
          <nuxt-link to="/">
            <v-img class="ml-7 mt-7"
                   height="69"
                   width="250"
                   src="https://www.pelininayakkabilari.com/Uploads/EditorUploads/Logo.png"
            ></v-img>
          </nuxt-link>
          <label style="width:150px"></label>
          <v-btn class=" mdi-magnify mt-10 ml-15" icon>
            <v-icon> mdi-magnify</v-icon>
          </v-btn>
          <v-text-field class="ml-7 mt-7" outlined label="Arama">
          </v-text-field>
          <v-btn class=" mdi-chevron-right mt-10 ml-5 background-color:#e0e0e0" icon>
            <v-icon> mdi-chevron-right</v-icon>
          </v-btn>
          <label style="width:150px"></label>
          <v-row align="right" justify="right" class="ml-15 mt-4">
          <NuxtLink to="/sepet">
            <v-btn class=" mdi-account mt-5 ml-0" icon> Sepet
            </v-btn>
          </NuxtLink>
          </v-row>
          <v-row align="right" justify="right" class="ml-15 mt-4">


            <v-menu v-if="userData !== null" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class=" mdi-account mt-5 ml-0" icon
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ userData ?  userData.email : 'Hata'}}
                  <v-icon> mdi-account</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click.prevent="logoutUser()" link>
                  <v-list-item-title>Çıkış Yap</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>



            <div v-else>
              <NuxtLink to="/auth/login">
                <v-btn class=" mdi-account mt-5" icon> ÜYE GİRİŞİ
                  <v-icon> mdi-account</v-icon>
                </v-btn>
              </NuxtLink>
              <label style="width:50px"></label>
              <NuxtLink to="/auth/register">
                <v-btn class="mdi-account-plus mt-5 ml-15" icon> ÜYE OL
                  <v-icon> mdi-account-plus</v-icon>
                </v-btn>
              </NuxtLink>
            </div>


          </v-row>
        </div>
        <label class="ml-15"> Hakkımızda </label>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>

export default {
  name: 'Arama',
  computed: {
    userData() {
      return this.getUser
    },
  },
  methods: {
    logoutUser() {
      this.$auth.logout()
      this.setAuth({user: null, loggedIn: false})


    }
  }
}
</script>
