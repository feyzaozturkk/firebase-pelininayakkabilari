<template>
  <v-container class="fill-height about">
    <v-col cols="12">
      <v-row align="center">
        <div class="d-flex flex-row ">
          <v-tabs>
            <v-tab v-for="(tab,i) in tabs" :key="i">{{tab}}</v-tab>
            <v-btn class="mdi-format-list-bulleted ml-2" style="background-color:#efeff1" icon>
              <v-icon> mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-btn class=" mdi-border-all  ml-2" style="background-color:#efeff1" icon>
              <v-icon> mdi-border-all</v-icon>
            </v-btn>
            <v-btn class="  ml-2" style="background-color:#efeff1" icon>
              <v-icon> mdi-apps</v-icon>
            </v-btn>
          </v-tabs>
        </div>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
  export default {
    name: 'Kategoriler',
    data: () => ({
      tabs: ["Yeni Eklenen", "Fiyata Göre(Artan)", "Fiyata Göre(Azalan)", "Ürün Adına Göre(A>Z)", "Ürün Adına Göre(A>Z)", "Stoktakiler", "32 Ürün"]
    })
  }
</script>
