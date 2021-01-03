<template>
  <div class=" about" >
    <v-col cols="12">
      <v-row align="center">
          <v-tabs>
            <v-tab class="mdi-home" icon>
              <v-icon> mdi-home</v-icon>
            </v-tab>
           <template v-for="(menu,i) in menus">
             <v-tab v-if="menu!='STILETTO'">{{menu}}</v-tab>
             <v-menu v-else offset-y>
               <template v-slot:activator="{ on, attrs }">
                 <v-tab
                   v-bind="attrs"
                   v-on="on"
                 >
                   {{menu}}
                 </v-tab>
               </template>
               <v-list>
                 <v-list-item
                   v-for="(item, index) in items"
                   :key="index"
                 >
                   <v-list-item-title>{{ item }}</v-list-item-title>
                 </v-list-item>
               </v-list>
             </v-menu>
           </template>

          </v-tabs>
      </v-row>
    </v-col>
  </div>
</template>
<script>
  export default {
    name: 'Navbar',
    data: () => ({
      menus:["YENİ SEZON AYAKKABI","ÇAĞLA X PELİN","STILETTO","EV TERLİĞİ","İNDİRİMDEKİLER","SPOR AYAKKABI VE BABETLER","ÇİZME","GERÇEK DERİ","TOPUKLU AYAKKABI","SPOR AYAKKABI VE BABETLER","ÇİZME","GERÇEK DERİ","TOPUKLU AYAKKABI"],
      items: ['>12 CM STILETTO', '>8 CM STILETTO', '>5 CM STILETTO', '>10 CM STILETTO'],
    }),
  }
</script>






