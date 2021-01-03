<template>
  <div>
    <v-card>
      <v-simple-table v-if="dataSource!==null">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Üürn Ad
            </th>
            <th class="text-left">
              Fiyat
            </th>
            <th class="text-left">
              #
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in dataSource.products"
            :key="item.id"
          >
            <td>{{ item.urunAd }}</td>
            <td>{{ item.fiyat }} ₺</td>
            <td @click="deleteProduct(item)">Sepetten Sil</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div v-else>Ürün Bulunamadı</div>
    </v-card>

    <v-card v-if="dataSource">
      <span class="m-2">Toplam Ürün: {{ dataSource.count }}</span>
      <span>Toplam Fiyat: {{ dataSource.totalPrice }}</span>
    </v-card>
  </div>
</template>

<script>
import cookie from 'js-cookie'

export default {
  name: "sepet",
  data: () => ({
    dataSource: null
  }),
  methods: {
    deleteProduct(item) {
      let cookieData = cookie.getJSON('sepet')

      let i = cookieData[0].products.findIndex(it => it.id === item.id)

      cookieData[0].products.splice(i, 1)
      cookieData[0].count = cookieData[0].count - 1;
      cookieData[0].totalPrice = cookieData[0].totalPrice - item.fiyat;
      cookie.set('sepet', cookieData)

      this.loadData()
    },
    loadData() {
      this.dataSource = cookie.getJSON('sepet')
      this.dataSource = this.dataSource ? this.dataSource[0] : null
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
