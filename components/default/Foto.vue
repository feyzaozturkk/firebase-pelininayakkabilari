<template>
      <v-carousel class="fill-height about" fluid>
        <v-card class=" " color="#FFFFF" height="900px">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-card>
      </v-carousel>
</template>

<script>
  export default {
    name:'Slider',
    data() {
      return {
        items: [
          {
            src: 'https://www.pelininayakkabilari.com/Uploads/Slider/-87.jpg?t=20200904182826',
          },
          {
            src: 'https://www.pelininayakkabilari.com/Uploads/Slider/-90.jpg?t=20201031151430',
          },
          {
            src: 'https://www.pelininayakkabilari.com/Uploads/Slider/-87.jpg?t=20200904182826',
          },
          {
            src: 'https://www.pelininayakkabilari.com/Uploads/Slider/-90.jpg?t=20201031151430',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
