<template>
  <v-container class="fill-height about" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" align="center">
        <v-card class="elevation-12" color="#FFFFF" style="padding: 10px;padding-bottom: 50px" width="500px">
          <v-form @submit.prevent="onSubmitForm">
            <h1 class="black--text text-sm-left ml-5 mb-5 mt-5">Üye Girişi</h1>
            <span v-if="getErrors !== null">{{ getErrors.message }}</span>
            <v-text-field v-model="user.email" dense class="rounded-0 ml-5 mr-5" outlined
                          label="E-posta"></v-text-field>
            <v-text-field v-model="user.password" dense class="rounded-0 ml-5 mr-5" type="password" outlined
                          label="Şifre"></v-text-field>
            <v-btn type="submit" class="rounded-0" style="background-color:#FF80AB; color:white" width="450px">Giriş Yap
            </v-btn>
          </v-form>

          <div class="d-flex flex-row ">
            <v-checkbox class="ml-10" label="Beni Hatırla"></v-checkbox>
            <label style="width:150px"></label>
            <v-btn small class="font-weight-light text-decoration-underline mt-5" text> Şifremi Unuttum</v-btn>
          </div>
          <nuxt-link to="/">
            <v-btn class="rounded-0" style="background-color:#FF80AB; color:white" width="450px">
              Üyeliksiz Devam Et
            </v-btn>
          </nuxt-link>
          <!--          <v-btn @click.prevent="googleAuth" icon class="rounded-0 btn-sm mt-2"-->
          <!--                 style="background-color:#FF80AB; color:white" width="450px">-->
          <!--            <v-icon>mdi-google</v-icon>-->
          <!--          </v-btn>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import * as firebase from "firebase";
// import 'firebase/auth'
//
// firebase.default.auth().languageCode = 'tr';

export default {
  middleware:['auth-control'],
  name: "login",
  data: () => ({
    user: {
      email: '',
      password: ''
    },
  }),
  methods: {
    async onSubmitForm() {
      if (!this.user.email || !this.user.password) {
        alert('lütfen kullanıcı bılgılerınızı gırınız');
        return;
      }
      await this.$auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(res => {
        if (res.user) {
          this.setAuth({
            user:  {
              email:res?.user.email,
              displayName:res?.user.displayName,
              emailVerified:res?.user.emailVerified,
              uid:res?.user.uid,
            },
            loggedIn: true
          })
          // this.$swal.fire('Oturum başarıyla açıldı.')
          this.$router.push('/')
        }
      }).catch(err => {
        console.error(err.message)
        this.$swal.fire(err.message,)
        this.setErrors({message: err.message, type: 'error'})
      })
    },
    // async googleAuth() {
    //   let provider = new firebase.default.auth.GoogleAuthProvider();
    //   // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //
    //   await firebase.default.auth().signInWithPopup(provider).then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     console.error(err.message)
    //   })
    // }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
