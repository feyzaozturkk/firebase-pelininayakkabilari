<template>
  <v-container class="fill-height about" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" align="center">
        <v-card class="elevation-12" color="#FFFFF" style="padding: 25px;padding-bottom: 50px" width="700px">
          <div>
            <h1 class="black--text text-sm-left ml-5 mb-5 mt-5">Hızlı Üyelik</h1>
            <v-text-field dense class="rounded-0 ml-5 mr-5" outlined label="Adınız"></v-text-field>
            <v-text-field dense class="rounded-0 ml-5 mr-5" outlined label="Soyadınız"></v-text-field>
            <v-text-field dense class="rounded-0 ml-5 mr-5" outlined label="E-posta"></v-text-field>
            <v-text-field dense class="rounded-0 ml-5 mr-5" outlined label="Şifre"></v-text-field>
            <v-text-field dense class="rounded-0 ml-5 mr-5" outlined label="+90"></v-text-field>
            <v-checkbox class="ml-10" label="Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak istiyorum.
                       "></v-checkbox>
            <v-checkbox class="ml-10"
                        label="Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak istiyorum."></v-checkbox>
            <v-checkbox class="ml-10"
                        label="Üyelik koşullarını ve kişisel verilerimin korunmasını kabul ediyorum"></v-checkbox>
            <v-btn class="rounded-0" style="background-color:#FF80AB; color:white" width="450px">Üye Ol</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'Uyelik'
  }
</script>




