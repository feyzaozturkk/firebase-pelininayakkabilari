<template>
  <v-container class="fill-height about" >
    <div class="d-flex flex-row ">
      <v-row align="left" justify="left">
        <v-col cols="12" sm="12" align="left">
          <v-card class="elevation-12" color="#FFFFF" height="530px" width="420px">
            <v-img height="420" width="420px"
                   :src="selectedImgUrl"></v-img>
            <div class="d-flex flex-row ">
              <v-row>
                <v-col v-for="(img,i) in images" :key="i" cols="2" sm="3">
                  <v-img width="100px"
                         @click="setImg(img)"
                         :src="img">
                    <div class="fill-height bottom-gradient"></div>
                  </v-img>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-card height="530" width="1000px" color="white" class="ml-2 mt-0">
        <v-row align="right" justify="right">
          <v-col cols="1" sm="1" align="center">
          </v-col>
        </v-row>
        <v-card height="150" width="1000px" color="#FFFFFF" class="ml-0 mt-0">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class=" ml-5 mt-0"> Pelinin Ayakabıları</v-list-item-subtitle>
              <v-list-item-title class="ml-5 mt-5 "> NESSO FÜME</v-list-item-title>
              <div class="d-flex flex-row">
                <v-list-item class="font-weight-bold ml-5 mt-10" style=" color:#999900"> ₺ 189,00
                </v-list-item>
                <h6 class="ml-2 mt-11" style=" color:#999900"> (KDV Dahil)</h6></div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card height="360" width="1000px" color="#FFFFFF" class="ml-0 mt-0">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="ml-5 mt-2"> ₺22,90 'den başlayan taksitlerle</v-list-item-subtitle>
              <v-list-item-h1 class="font-weight-bold ml-5 mt-5 "> Standart kalıp iç: tekstil malzeme dış suni deri
                ve file 3,5 taban
              </v-list-item-h1>
              <div class="d-flex flex-row">
                <v-list-item-subtitle class="font-weight-bold class= ml-5 mt-10"> Numara:
                  <v-combobox solo dense class="ml-5 mt-5 mr-12" outlined label="Seçiniz"></v-combobox>
                </v-list-item-subtitle>
              </div>
            </v-list-item-content>
          </v-list-item>
          <div class="d-flex flex-row">
            <label style="width:300px"></label>
            <v-btn class="rounded-0 ml-12 mt-7" style="background-color:#FF80AB; color:white" width="200px"> SEPETE
              EKLE
            </v-btn>
            <v-btn class="rounded-0 ml-14 mt-7" style="background-color:#CCCC00; color:white" width="200px"> HEMEN AL
            </v-btn>
          </div>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Sepet',
    data: () => ({
      selectedImgUrl: 'https://www.pelininayakkabilari.com/Uploads/UrunResimleri/nesso-fume-ef5e.jpg',
      images: [
        "https://www.pelininayakkabilari.com/Uploads/UrunResimleri/thumb/nesso-fume-ef5e.jpg",
        "https://www.pelininayakkabilari.com/Uploads/UrunResimleri/thumb/nesso-fume-d3ef.jpg",
        "https://www.pelininayakkabilari.com/Uploads/UrunResimleri/thumb/nesso-fume-520a.jpg",
        "https://www.pelininayakkabilari.com/Uploads/UrunResimleri/thumb/nesso-fume-3fba.jpg"
      ]
    }),
    methods: {
      setImg(url) {
        this.selectedImgUrl = url;
      }
    }
  }
</script>
